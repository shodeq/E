import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
        <h1 className="text-8xl">Register Page</h1>
        <div className="pt-10">
            <span className="text-xl">Sudah punya akun dek? <Link to="/auth/login" className="text-blue-500 underline">login deeek!</Link></span>
        </div>
        <div>
            <Link to={"/"} className="text-blue-500 underline">Kembali ke halaman depan</Link>
        </div>
    </div>
  )
}
