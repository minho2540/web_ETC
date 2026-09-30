# ETC

เว็บ HTML ไฟล์เดียว ใช้ได้บน iPad / มือถือ / คอม โฮสต์บน GitHub Pages และเก็บข้อมูลซิงก์กับ Google Sheet

## ล็อกอินเริ่มต้น
- ผู้ใช้: `meen` / รหัสผ่าน: `5340` (สิทธิ์ admin)
- admin เพิ่ม/ลบผู้ใช้ได้ในเมนู "ผู้ใช้"

> ⚠️ รหัสผ่านอยู่ฝั่ง client (ใครเปิดดูโค้ดก็เห็น) เหมาะกับใช้ส่วนตัวเท่านั้น อย่าเก็บข้อมูลสำคัญมาก

## วิธีขึ้น GitHub Pages
1. สร้าง repo ใหม่ อัปโหลด `index.html` และ `README.md`
2. Settings → Pages → Source: `main` / root → Save
3. เปิดลิงก์ `https://<user>.github.io/<repo>/` บน iPad แล้ว Add to Home Screen

## วิธีเชื่อม Google Sheet
1. สร้าง Google Sheet ใหม่ → Extensions → Apps Script
2. วางโค้ดนี้:

```js
function doGet() {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('db') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('db');
  return ContentService.createTextOutput(s.getRange('A1').getValue() || '{}').setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('db') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('db');
  s.getRange('A1').setValue(e.postData.contents);
  return ContentService.createTextOutput('ok');
}
```
3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone → คัดลอก URL
4. เข้าเว็บด้วย admin → เมนู "Google Sheet" → วาง URL → บันทึก
5. หลังจากนั้นทุกครั้งที่แก้ข้อมูลจะส่งขึ้น Sheet อัตโนมัติ (มีปุ่มส่ง/ดึงด้วยมือ)

## โครงสร้างไฟล์ (โฟลเดอร์เดียว ไม่มีโฟลเดอร์ย่อย)
`index.html` (แอป) · `etc.css` · `etc.js` · `library.html` · หน้าความรู้: `recipes` `thailand` `health` `money` `english` `tech` `history` `space` `science` `travel-world` `garden` `geography` `japanese` `animals` `music` `sports` `art` `korean` `herbs` `festivals` (.html) · เกม/ลับ: `maze` `labyrinth` `secret-riddles` `secret-treasure` `secret-shop` (.html) · `README.md`
หน้าใหม่: สร้าง .html เพิ่ม แล้วเพิ่มลงรายการ `PAGES` ใน `etc.js`

## เมนูในแอป (index.html)
หน้าแรก · งาน · รายรับ-จ่าย · โน้ต · เครื่องมือ · นิสัย · จับเวลา · ปฏิทิน · สต็อก · ลูกค้า · เป้าหมายออม · ค้นหา · คลังความรู้ · แดชบอร์ด · อารมณ์ · หนัง/หนังสือ · ทายเลข · สุ่มเลือก · บัญชี · ผู้ใช้ (admin) · Google Sheet (admin)

## Changelog
- **v11** หน้าใหม่: 🎨 art, 🇰🇷 korean, 🌿 herbs, 🎉 festivals อัปเดต etc.js และ library.html (เมนูคลังความรู้ในแอปยังไม่แสดง 4 หน้านี้ แต่เข้าได้จาก library.html และแถบเมนู) ย่อ README ให้สั้นลง
- **v10** japanese, animals, music, sports + แพ็ก etc-site.zip
- **v9** travel-world, garden, geography + ร้านลับ `secret-shop` (ซื้อสีธีมด้วยเหรียญ)
- **v8** ระบบเหรียญ 🪙 (ประตูสุ่ม +1, ผ่านด่านเขาวงกต +2, หาทางออก +10, ปริศนา +5), ห้องลับ riddles/treasure, science
- **v7** ธีมเขาวงกต: maze (เกม), labyrinth (เลือกประตู), ปุ่ม 🚪 ประตูสุ่มทุกหน้า, history, space
- **v6** money, english, tech
- **v5** เริ่มหลายหน้า: library, recipes, thailand, health + etc.css/etc.js + ธีมสว่าง/มืด
- **v4** แดชบอร์ด, อารมณ์, หนัง/หนังสือ, ทายเลข, สุ่มเลือก, สลับธีม
- **v3** ปฏิทิน, สต็อก, ลูกค้า, เป้าหมายออม, ค้นหา, ชื่อเว็บ ETC
- **v2** นิสัย, จับเวลา, บัญชี (เปลี่ยนรหัส/CSV), แปลงหน่วย, ใส่ URL Apps Script เริ่มต้น
- **v1** ระบบ login user/admin, งาน, รายรับ-จ่าย, โน้ต, เครื่องมือ, ซิงก์ Google Sheet

## Backlog (รอบถัดไป)
รายจ่ายแยกหมวด+กราฟ · แชร์โน้ต · แจ้งเตือนงาน · ประวัติศาสตร์โลก · ร้านเหรียญเพิ่มของ · ปริศนาเพิ่ม · เขาวงกตหลายชั้น · ตารางเวลาเรียน · แปลงสกุลเงิน · บันทึกน้ำหนัก+กราฟ · เกมความจำ · แบ่งบิล · แชร์ลิงก์ · ให้เมนูคลังความรู้ในแอปดึงรายการจาก etc.js
