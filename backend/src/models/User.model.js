import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    /* ================= COMMON FIELDS ================= */
    role: {
      type: String,
      enum: ["patient", "hospital"],
      default: "patient",
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    contact: {
      type: String,
      validate: {
        validator: (v) => !v || /^[0-9]{10}$/.test(v),
        message: "Contact number must be 10 digits",
      },
    },

    address: {
      type: String,
      trim: true,
    },

    isVerified: {
      type: Boolean,
      default: true,
    },

    otp: String,
    otpExpires: Date,

    lastLogin: Date,

    /* ================= PATIENT FIELDS ================= */
    fullName: {
      type: String,
      trim: true,
      maxlength: 100,
      required: function () {
        return this.role === "patient";
      },
    },

    age: {
      type: Number,
      min: 0,
      max: 120,
      required: function () {
        return this.role === "patient";
      },
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: function () {
        return this.role === "patient";
      },
    },

    /* ================= HOSPITAL FIELDS ================= */
    hospitalName: {
      type: String,
      trim: true,
      required: function () {
        return this.role === "hospital";
      },
    },

    city: {
      type: String,
      trim: true,
      required: function () {
        return this.role === "hospital";
      },
    },

    pincode: {
      type: String,
      trim: true,
      required: function () {
        return this.role === "hospital";
      },
    },

    specializations: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

/* ================= PASSWORD HASH ================= */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

/* ================= PASSWORD COMPARE ================= */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/* ================= SEARCH INDEX ================= */
userSchema.index({
  fullName: "text",
  email: "text",
  hospitalName: "text",
});

const User = mongoose.model("User", userSchema);
export default User;
