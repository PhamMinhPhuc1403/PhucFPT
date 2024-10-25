const API_URL = `http://localhost:3000`;
type TDichVu = { 
    id:number; 
    ten:string; 
    hinh:string; 
} 
type TKhachsan = { 
    id:number;  
    title:string; 
    hinh:string; 
    diachi: string;
    dientich: String;
    gia: String;
}
type TinTuc= {
    id: number;
    hinh: string;
    desc: String;

}
type TChiNhanh = { 
    id:number;  
    ten:string; 
    hinh:string; 
}
type TBangGia = { 
    id:number;  
    ten:string; 
    gia:number; 
}
const showlistdichvu = async ()=>{
    let arr:TDichVu[] = await fetch(API_URL + "/dich_vu")
    .then (res => res.json())
    .then (data => data as TDichVu[]);
    let str=``;
    arr.forEach ( row => str+= show1dichvu(row) )
    return str;
}
const show1dichvu = (row:TDichVu) => {
    return `<div>
                <img src="${row.hinh}">
                <h4>${row.ten}</h4>
            </div> `;
}

const showlistkhachsan = async () => {
    let arr: TKhachsan[] = await fetch(API_URL + "/khach_san")
        .then(res => res.json())
        .then(data => data as TKhachsan[]);

    let str = ``;
    arr.forEach(row => str += show1khachsan(row));
    return str;
}

const show1khachsan = (kh: TKhachsan) => {
    return `<div>
        <img src="images/${kh.hinh}" alt="${kh.title}" width="200" height="150">
        <h4>${kh.title}</h4>
        <p>Địa chỉ: ${kh.diachi}</p>
        <p>Diện tích: ${kh.dientich}</p>
        <p>Giá: ${kh.gia}</p>
    </div>`;
}


const showlistTintuc = async ()=> {
    let arr: TinTuc[] = await fetch(API_URL + "/tin_tuc")
    .then(res => res.json())
    .then(data => data as TinTuc[]);
    
    let str = ``;
    arr.forEach(row => str += show1Tintuc(row));
    return str;
}

const show1Tintuc = (news: TinTuc) => {
    return `<div>
    <img src="images/${news.hinh}">
    <a><p>${news.desc}</p></a>
     <p>Xem thêm</p>
    </div>`;
}


const showbanggia = async ()=>{
    let arr:TBangGia[] = await fetch(API_URL + "/bang_gia")
    .then (res => res.json())
    .then (data => data as TBangGia[]);
    let str=``;

    arr.forEach ( row => str+= show1gia(row) )
    return str;
}
const show1gia = (g:TBangGia) => { 
    return `<div>
     <p>${g.ten}</p>
     <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}



export { showlistdichvu , showlistkhachsan, showlistTintuc }
export { showbanggia}