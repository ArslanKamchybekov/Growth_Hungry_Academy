import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

const UpdateProfile = () => {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        points: 0,
    });

    const router = useRouter();
    const { id } = useParams();

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access-token");
            if (!token) {
                throw new Error("No token found");
            }

            const response = await fetch(`http://localhost:8000/user/update/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profile),
            });

            if (response.ok) {
                alert("Profile updated successfully");
            } else {
                throw new Error("Profile update failed");
            }

            router.push(`/profile/${id}`);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };
    
    return (
        <>
            <Navbar />
            <br />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-md rounded my-16">
                <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

                {/* Your Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Points</label>
                    <input
                        type="number"
                        name="points"
                        value={profile.points}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                
                {/* <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div> */}

{/*    
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={profile.password}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

              
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={profile.confirmPassword}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div> */}

                <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                    Update Profile
                </button>
            </form>
        </>
    );
}

export default UpdateProfile;