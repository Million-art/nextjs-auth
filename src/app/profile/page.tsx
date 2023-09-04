"use client"
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
    const logout = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            toast.success("Logout successfully");
            window.location.href = "/login";
        } catch (error:any) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <h1>ProfilePage</h1>
            <h2>Profile</h2>
            <hr />
            <button
                className="text-white bg-red-600 rounded-sm py-2 px-4 font-bold"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
}