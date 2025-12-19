import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";
import sendEmail from "../utils/sendEmail.js";
import asyncHandler from "../utils/asyncHandler.js";

/* ================= JWT HELPER ================= */
const signToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: "SmartHealth",
    }
  );
};

/* ================= REGISTER ================= */
export const register = async (req, res, next) => {
  try {
    const {
      role, // patient | hospital

      // patient
      fullName,
      age,
      gender,

      // hospital
      hospitalName,
      city,
      pincode,
      address,
      specializations,

      // common
      email,
      contact,
      password,
      confirmPassword,
    } = req.body;

    /* ---------- BASIC VALIDATION ---------- */
    if (!role || !email || !password || !confirmPassword) {
      return next(new AppError("Required fields missing", 400));
    }

    if (!["patient", "hospital"].includes(role)) {
      return next(new AppError("Invalid role", 400));
    }

    if (password !== confirmPassword) {
      return next(new AppError("Passwords do not match", 400));
    }

    if (password.length < 8) {
      return next(new AppError("Password must be at least 8 characters", 400));
    }

    /* ---------- ROLE BASED VALIDATION ---------- */
    if (role === "patient") {
      if (!fullName || !age || !gender) {
        return next(new AppError("Patient details are incomplete", 400));
      }
    }

    if (role === "hospital") {
      if (!hospitalName || !city || !pincode) {
        return next(new AppError("Hospital details are incomplete", 400));
      }
    }

    /* ---------- DUPLICATE EMAIL ---------- */
    const existingUser = await User.findOne({
      email: new RegExp(`^${email}$`, "i"),
    });

    if (existingUser) {
      return next(new AppError("Email already registered", 400));
    }

    /* ---------- CREATE USER ---------- */
    const newUser = await User.create({
      role,

      // patient fields
      fullName: role === "patient" ? fullName : undefined,
      age: role === "patient" ? age : undefined,
      gender: role === "patient" ? gender : undefined,

      // hospital fields
      hospitalName: role === "hospital" ? hospitalName : undefined,
      city: role === "hospital" ? city : undefined,
      pincode: role === "hospital" ? pincode : undefined,
      address,
      specializations,

      // common
      email: email.toLowerCase(),
      contact,
      password,
      isVerified: true,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      message:
        role === "patient"
          ? "Patient registered successfully"
          : "Hospital registered successfully",
      token,
      data: { user: newUser },
    });
  } catch (err) {
    next(new AppError(err.message || "Registration failed", 500));
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Email and password are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError("Invalid email or password", 401));
    }

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      message: "Login successful",
      token,
      data: { user },
    });
  } catch (err) {
    next(new AppError("Login failed", 500));
  }
};

/* ================= SEND OTP ================= */
export const sendOtp = async (req, res, next) => {
  try {
    const { identifier } = req.body;

    if (!identifier) {
      return next(new AppError("Email is required", 400));
    }

    const user = await User.findOne({ email: identifier });
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save({ validateBeforeSave: false });

    await sendEmail({
      to: user.email,
      subject: "SmartHealth - Password Reset OTP",
      message: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    });

    res.status(200).json({
      status: "success",
      message: "OTP sent to registered email",
    });
  } catch (err) {
    next(new AppError("Failed to send OTP", 500));
  }
};

/* ================= VERIFY OTP ================= */
export const verifyOtp = async (req, res, next) => {
  try {
    const { identifier, otp } = req.body;

    const user = await User.findOne({
      email: identifier,
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(new AppError("Invalid or expired OTP", 400));
    }

    res.status(200).json({
      status: "success",
      message: "OTP verified",
    });
  } catch (err) {
    next(new AppError("OTP verification failed", 500));
  }
};

/* ================= RESET PASSWORD ================= */
export const resetPassword = async (req, res, next) => {
  try {
    const { identifier, otp, newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      return next(new AppError("Passwords do not match", 400));
    }

    const user = await User.findOne({
      email: identifier,
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(new AppError("Invalid or expired OTP", 400));
    }

    user.password = newPassword;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Password reset successful",
    });
  } catch (err) {
    next(new AppError("Password reset failed", 500));
  }
};

/* ================= UPDATE PROFILE ================= */
export const updateProfile = async (req, res, next) => {
  try {
    const {
      // patient
      fullName,
      age,
      gender,

      // hospital
      hospitalName,
      city,
      pincode,
      address,
      specializations,

      // common
      contact,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    // Role-based updates
    if (user.role === "patient") {
      if (fullName) user.fullName = fullName;
      if (age) user.age = age;
      if (gender) user.gender = gender;
    } else if (user.role === "hospital") {
      if (hospitalName) user.hospitalName = hospitalName;
      if (city) user.city = city;
      if (pincode) user.pincode = pincode;
      if (address) user.address = address;
      if (specializations) user.specializations = specializations;
    }

    // Common updates
    if (contact) user.contact = contact;

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: "success",
      message: "Profile updated successfully",
      data: { user },
    });
  } catch (err) {
    next(new AppError("Profile update failed", 500));
  }
};

/* ================= PROTECT ================= */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new AppError("Not logged in", 401);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError("User no longer exists", 401);
  }

  req.user = user;
  next();
});
