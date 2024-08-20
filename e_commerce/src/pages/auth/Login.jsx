import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div>
            <h1 className="text-8xl">Login Page</h1>
            <div className="pt-10">
                <span className="text-xl">Belum punya akun dek? <Link to="/auth/register" className="text-blue-500 underline">daftar deeek!</Link></span>
            </div>
            <div>
                <Link to={"/"} className="text-blue-500 underline">Kembali ke halaman depan</Link>
            </div>
        </div>
    )
}
