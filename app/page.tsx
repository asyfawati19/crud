"use client"

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { table } from 'console';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getData, setUpdateStatus } from './models/mahasiswa';
import { title } from 'process';

// Buat variabel "mahasiswa"
// Untuk tampil data mahasiswa
export default function RootPage() {
    //buat hooks ("use stste")
    const [getValue, setValue] = useState({})

    //buat fungsi "fectData"
    async function fectData() {
        setValue(await getData());

    }

    //buat hook ("use effect")
    useEffect(() => {
        //panggil fungsi "fectData"
        fectData();

    }, [])


    //buat fungsi setdelete
    function setDelete(npm: string, nama: string) {
        //alert("Klik Delete")
        if (confirm(`Data Mahasiswa Dengan npm: ${npm} - \ndan nama: ${nama} \ningin dihapus ?`) == true) {
            setUpdateStatus(npm)
            alert(`Data Mahasiswa Dengan npm: ${npm} - \ndan nama: ${nama} Sudah Berhasil dihapus!`);
            location.reload();
        }
        // else
        // {
        //     alert("Tombol Cancel");
        // }
    }


    // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
    //     where: {
    //         id: 2,
    //       },
    // });

    return (
        <>
            {/* Judul*/}
            <title>View Data Mahasiswa</title>

            {/* Menu untuk tambah data mahasiswa*/}
            <nav className="mt-5 flex justify-end text-center ">
                <button className="btn btn-outline btn-success">
                    <Link href={"/add"}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        Tambah Data Mahasiswa
                    </Link>
                </button>
            </nav>

            {/*tampilkan data mahasiswa*/}
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-300 h-12">
                        <th className="w-10% border border-gray-700">Aksi</th>
                        <th className="w-10% border border-gray-700">NPM</th>
                        <th className="w-60% border border-gray-700">Nama</th>
                        <th className="w-20% border border-gray-700">Jurusan</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(getValue).map((data: any, index: number) => (

                        // <div key={index}>
                        //     <div>{data.npm} - {data.nama} - {data.jurusan}</div>
                        // </div>

                        <tr key={index}>
                            <td className="text-center border border-gray-700 p-2.5">
                                {/* icon edit*/}
                                <Link href={`/edit/${btoa(data.npm)}/${atob("MjIzMTIwMjA=")}`} className="bg-emerald-700 text-white px-2.5 py-5px rounded-md mr-5px text-sm"
                                    title="Ubah Data">
                                    <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                                </Link>

                                {/* icon delete*/}
                                <Link href={"/"} className="bg-rose-700 text-white px-2.5 py-5px rounded-md ml-5px text-sm"
                                    title="Hapus Data" onClick={() => { setDelete(data.npm, data.nama) }}>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Link>
                            </td>
                            <td className="text-center border border-gray-700 px-2.5">{data.npm}</td>
                            <td className="text-justify border border-gray-700 px-2.5">{data.nama}</td>
                            <td className="text-center border border-gray-700 px-2.5">{data.jurusan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {mahasiswa?.nama} */}
        </>
    )
}