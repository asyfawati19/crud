"use client";

import React, { useState } from 'react'

export default function AddPage() {
    // Buat hook ("Use state")
    const [getNPM, setNPM] = useState("");
    const [getNama, setNama] = useState("");
    const [getJurusan, setJurusan] = useState("");

    // Buat fungsi untuk simpan data
    const setSave = () => {
        // alert(getNPM);
        // if (getNPM != "" &&
        //     getNama != "" &&
        //     getJurusan != "") {
        //     alert("Simpan");
        // }

        // jika ada data yang tidak terisi
        // else {
        //     alert("Lengkapi Seluruh Data !");
        // }

        // ternary operator
        (getNPM != "" && getNama != "" && getJurusan != "")
            ? alert(" Simpan")
            : [alert(" Lengkapi Seluruh Data !"), alert("Gagal")]
    };

    return (
        <div >
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className=''>NPM</div>
                <div className='col-span-3'>
                    <input
                        type="text"
                        placeholder="Isi NPM"
                        className="input input-bordered input-success w-full"
                        onChange={(e) => {
                            setNPM(e.target.value)
                        }}
                    />
                </div>
                <div className='col-start-1'>Nama Mahasiswa</div>
                <div className='col-span-3'>
                    <input
                        type="text"
                        placeholder="Isi Nama"
                        className="input input-bordered input-success w-full"
                        onChange={(e) => {
                            setNama(e.target.value)
                        }}
                    />
                </div>
                <div className='col-start-1'>Jurusan Mahasiswa</div>
                <div className='col-span-3'>
                    <select defaultValue={""} className="select select-success w-full max-w-xs"
                        onChange={(e) => {
                            setJurusan(e.target.value)
                        }}>
                        <option value={""} disabled>
                            Pilih Jurusan Mahasiswa
                        </option>
                        <option value={"Informatika"}>Informatika</option>
                        <option value={"Sistem Informasi"}>Sistem Informasi</option>
                        <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                        <option value={"Teknik Komputer"}>Teknik Komputer</option>
                        <option value={"Teknik Sipil"}>Teknik Sipil</option>
                        <option value={"Akuntansi"}>Akuntansi</option>
                        <option value={"Manajemen"}>Manajemen</option>
                    </select>
                </div>
                <div className='col-start-2 col-span-2'>
                    <button className="btn btn-active btn-neutral mr-5px w-28" onClick={setSave}>
                        Simpan
                    </button>
                    <button className="btn btn-active ml-5px w-28">Batal</button>
                </div>
                {/* <div className=''>NPM</div> */}
                {/* <div className=''>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-success w-full max-w-xs" 
                    />
                </div> */}
            </div>

        </div>
    )
}
