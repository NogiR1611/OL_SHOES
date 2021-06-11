import jsPDF from 'jspdf';
import { format } from "date-fns";

const OrderInvoicePdf = () => {
    const doc = new jsPDF("p","mm",[200,280]);
    const date = format(new Date(),"dd-MM-yyyy,hh:mm");

    doc.addFont('ReceiptionalReceipt', 'Receiptional Receipt', 'normal','StandardEncoding');
    doc.setFont('Receiptional Receipt');  
    doc.setFontSize(14);
    //row 1
    doc.text("Order ID: ",8,8);
    doc.text("#012332",32,8);
    //row 2
    doc.text("Dipesan dari Ol Shoes",8,15);
    //row 3
    doc.text("VANS AUTHENTIC OG DRESS BLUE IVORY",8,40);
    doc.text("x2",190,40);
    //row 4
    doc.text("SIZE 40",8,47);
    //row 5
    doc.text("Rp. 280,000",8,54);
    //row 6
    doc.text("Harga Normal Produk",8,79);
    doc.text(100,79,"Dssda");
    //row 7
    doc.text("Diskon",8,86);
    //row 8
    doc.text("Biaya Pengiriman",8,93);
    //row 9
    doc.text("Total Harga",8,118);
    //row 10
    doc.text("Metode Pembayaran : ",8,125);
    //row 11
    doc.text("Mandiri",8,133);
    //row 12
    doc.text("Virtual Account 65646446444",8,140);
    //row 13
    doc.text("Metode Pengiriman : ",8,165);
    //row 14
    doc.text("JNE REG",8,172);
    //row 15
    doc.text("Pengirim : ",8,197);
    //row 16
    doc.text("JKTSneakers",8,204);
    //row 17
    doc.text("0813-1221-2323",8,211);
    //row 18
    doc.text("Penerima : ",8,236);
    //row 19
    doc.text("dede",8,243);
    //row 20
    doc.text("+62867667667",8,250);
    //row 21
    doc.text("Komplek Permata Biru",8,257);
    //row 22
    doc.text("Cileunyi(Kab.Bandung)",8,264);
    //row 23
    doc.text("nogir16111998@gmail.com",8,271);
    doc.save(`Order_${date}.pdf`);
}

export default OrderInvoicePdf; 