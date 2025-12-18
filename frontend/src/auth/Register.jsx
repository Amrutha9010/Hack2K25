import { useState } from "react";
import "./Register.css";

function Register({ onGoToLogin, onRegisterSuccess }) {
  const [form, setForm] = useState({
    role: "student", // student = patient, warden = hospital

    // ---------- PATIENT ----------
    fullName: "",
    age: "",
    gender: "",
    email: "",
    contact: "",

    // ---------- HOSPITAL ----------
    hospitalName: "",
    city: "",
    pincode: "",
    address: "",
    specializations: "",

    // ---------- COMMON ----------
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------- CONTENT ---------------- */
  const welcomeTitle =
    form.role === "student"
      ? "Create Your Patient Account"
      : "Hospital Registration";

  const welcomeText =
    form.role === "student"
      ? "Track your health, get remedies, book appointments, and consult doctors easily."
      : "Register your hospital to manage appointments and patient consultations.";

  /* ---------------- HELPERS ---------------- */
  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (form.role === "student") {
      if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!form.age) newErrors.age = "Age is required";
      if (!form.gender) newErrors.gender = "Gender is required";
    }

    if (form.role === "warden") {
      if (!form.hospitalName.trim())
        newErrors.hospitalName = "Hospital name is required";
      if (!form.city.trim()) newErrors.city = "City is required";
      if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
    }

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.contact.trim())
      newErrors.contact = "Contact number is required";

    if (!form.password || form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload =
        form.role === "student"
          ? {
              role: "patient",
              fullName: form.fullName,
              age: Number(form.age),
              gender: form.gender,
              email: form.email,
              contact: form.contact,
              password: form.password,
              confirmPassword: form.confirmPassword,
            }
          : {
              role: "hospital",
              hospitalName: form.hospitalName,
              email: form.email,
              contact: form.contact,
              address: form.address,
              city: form.city,
              pincode: form.pincode,
              specializations: form.specializations,
              password: form.password,
              confirmPassword: form.confirmPassword,
            };

      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ✅ SAFE JSON HANDLING
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      onRegisterSuccess && onRegisterSuccess(data.data.user.role);
    } catch (err) {
      alert(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="side-panel">
          <h2>{welcomeTitle}</h2>
          <p>{welcomeText}</p>
          <button className="btn transparent" onClick={onGoToLogin}>
            Sign In
          </button>
        </div>

        <div className="form-container">
          <h2 className="title">Sign Up</h2>

          <div className="role-selection">
            <button
              type="button"
              className={form.role === "student" ? "active" : ""}
              onClick={() => updateForm("role", "student")}
            >
              User
            </button>
            <button
              type="button"
              className={form.role === "warden" ? "active" : ""}
              onClick={() => updateForm("role", "warden")}
            >
              Hospital
            </button>
          </div>

          <form onSubmit={handleRegister}>
            {/* -------- PATIENT -------- */}
            {form.role === "student" && (
              <>
                <input
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) => updateForm("fullName", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) => updateForm("age", e.target.value)}
                />
                <select
                  value={form.gender}
                  onChange={(e) => updateForm("gender", e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </>
            )}

            {/* -------- HOSPITAL -------- */}
            {form.role === "warden" && (
              <>
                <input
                  placeholder="Hospital Name"
                  value={form.hospitalName}
                  onChange={(e) =>
                    updateForm("hospitalName", e.target.value)
                  }
                />
                <input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => updateForm("city", e.target.value)}
                />
                <input
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={(e) => updateForm("pincode", e.target.value)}
                />
                <textarea
                  placeholder="Hospital Address"
                  value={form.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                />
                <input
                  placeholder="Departments / Specializations"
                  value={form.specializations}
                  onChange={(e) =>
                    updateForm("specializations", e.target.value)
                  }
                />
              </>
            )}

            {/* -------- COMMON -------- */}
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => updateForm("email", e.target.value)}
            />
            <input
              placeholder="Contact Number"
              value={form.contact}
              onChange={(e) => updateForm("contact", e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => updateForm("password", e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                updateForm("confirmPassword", e.target.value)
              }
            />

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
