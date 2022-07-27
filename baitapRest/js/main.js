const dom = (selector) => document.querySelector(selector)

const tinhDiemTrungBinh = (id, ...idDiem) => {
    let tongDiem = 0
    let diemTB = 0

    idDiem.forEach(idDiem_i => {
        const diem = Number(dom(idDiem_i).value)
        if (diem == 0) {
            tongDiem = NaN
            return
        } else {
            tongDiem += diem
        }
    })

    diemTB = tongDiem / idDiem.length

    dom(id).innerHTML = diemTB.toFixed(2)
}

dom('#btnKhoi1').onclick = () => {
    tinhDiemTrungBinh('#tbKhoi1', '#inpToan', '#inpLy', '#inpHoa')
}

dom('#btnKhoi2').onclick = () => {
    tinhDiemTrungBinh('#tbKhoi2', '#inpVan', '#inpSu', '#inpDia', '#inpEnglish')
}