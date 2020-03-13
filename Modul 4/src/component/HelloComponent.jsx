import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    return (
        <center>
            <h1>From Login</h1>
            <div className="kotak-p">
                <p className='text-judul-login' >Tugas Pertemuan Ketiga</p>
                <form>
                    <label>Username
                    <input type="text" className="tb" id="username" placeholder="Masukkan Username" />
                    </label>
                    <label>Password
                    <input type="password" className="tb" id="password" placeholder="Masukkan Password" />
                    </label>

                    <input type="submit" className="tombol_login" value="login" />
                    <input type="checkbox" /><p className="rm">Remember me</p>
                    <input type="submit" className="tombol_cancel" value="cancel" />
                </form>
            </div >
        </center >
    );
}

export default HelloComponent;