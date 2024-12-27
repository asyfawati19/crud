"use server";

import { PrismaClient } from "@prisma/client";

// buat variable primsa
const prisma = new PrismaClient(); //buat variabel "prisma"

// buat fungsi tampil data
export async function getData() {
    // buat variabel "mahasiswa"
    // untuk tampil data mahasiswa
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y",
            // jurusan: "informatika",
            // jurusan: {
            // startsWith: "Sistem"
            // endsWith: "Tika" 
            // contains: "tem"
            // }
        },
    }); 
    // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
    //   where: {
    //     id: 1,
    //   },
    // })
    return mahasiswa;
}


// buat fungsi row function untuk update status
// export async function setUpdateStatus()
export const setUpdateStatus = async(npm: string) => 
    {
    // tidak menggunakan return karena jika data dihapus tidak menampilkan lagi / 
    // jika data dijumlah jumlahnya tidak ditampilkan disebut prosedur 
    // jika ada return maka nilai jumlah ditampilkan lagi 

    // untuk mengubah data mahasiswa dari y menjadi n
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm,
        },
        data: {
            status: "N",

        }
    });
    
}

// buat fungsi cek data mahasiswa ("npm")
export const checkData = async (npm: string) => {
    const check = await prisma.tb_mahasiswa.findMany({
        select: {
            id: true,
        },
        where: {
            npm: npm,
        },
    }); 

    return check;
}