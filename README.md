ขั้นตอนการติดตั้ง (ทำครั้งเดียว)
1. ไปที่ nodejs.org แล้วโหลดตัว LTS มาติดตั้งให้เรียบร้อย
2. สร้างโฟลเดอร์ใหม่สำหรับโปรเจกต์นี้ (เช่น football-live)
3. เปิด Terminal หรือ Command Prompt เข้าไปในโฟลเดอร์นั้น แล้วพิมพ์คำสั่ง:

Bash
npm init -y
npm install express socket.io


วิธีการใช้งาน
1. เปิด Terminal ในโฟลเดอร์นั้น แล้วพิมพ์: node server.js
2. เปิด OBS Studio -> เพิ่ม Browser Source
3. ใส่ URL: http://localhost:3000/overlay.html (ห้ามเลือก Local File)
4. เปิด Chrome/Edge ไปที่: http://localhost:3000/controller.html
