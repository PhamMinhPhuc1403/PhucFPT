const API_URL = `http://localhost:3000`;
const showlistdichvu = async () => {
    let arr = await fetch(API_URL + "/dich_vu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1dichvu(row));
    return str;
};
const show1dichvu = (row) => {
    return `<div>
                <img src="${row.hinh}">
                <h4>${row.ten}</h4>
            </div> `;
};
const showlistkhachsan = async () => {
    let arr = await fetch(API_URL + "/khach_san")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1khachsan(row));
    return str;
};
const show1khachsan = (kh) => {
    return `<div>
        <img src="images/${kh.hinh}" alt="${kh.title}" width="200" height="150">
        <h4>${kh.title}</h4>
        <p>Địa chỉ: ${kh.diachi}</p>
        <p>Diện tích: ${kh.dientich}</p>
        <p>Giá: ${kh.gia}</p>
    </div>`;
};
const showlistTintuc = async () => {
    let arr = await fetch(API_URL + "/tin_tuc")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1Tintuc(row));
    return str;
};
const show1Tintuc = (news) => {
    return `<div>
    <img src="images/${news.hinh}">
    <a><p>${news.desc}</p></a>
     <p>Xem thêm</p>
    </div>`;
};
const showbanggia = async () => {
    let arr = await fetch(API_URL + "/bang_gia")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1gia(row));
    return str;
};
const show1gia = (g) => {
    return `<div>
     <p>${g.ten}</p>
     <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
};
export { showlistdichvu, showlistkhachsan, showlistTintuc };
export { showbanggia };
