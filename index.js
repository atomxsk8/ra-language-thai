module.exports = {
  ra: {
    action: {
      add_filter: "เพิ่มตัวกรองข้อมูล",
      add: "เพิ่ม",
      back: "ย้อนกลับ",
      bulk_actions: "%{smart_count} รายการที่เลือก",
      cancel: "ยกเลิก",
      clear_input_value: "ล้างข้อมูล",
      clone: "คัดลอก",
      create: "สร้าง",
      delete: "ลบ",
      edit: "แก้ไข",
      export: "นำออก",
      list: "รายการ",
      refresh: "โหลดใหม่",
      remove_filter: "ล้างตัวกรองข้อมูลนี้",
      remove: "ล้างข้อมูล",
      save: "บันทึก",
      show: "แสดง",
      sort: "จัดเรียง",
      undo: "ยกเลิกการกระทำ"
    },
    boolean: {
      true: "ใช่",
      false: "ไม่"
    },
    page: {
      create: "สร้าง %{name}",
      dashboard: "ข้อมูลสรุป",
      edit: "%{name} #%{id}",
      error: "เกิดข้อผิดพลาดบางอย่าง",
      list: "รายการ %{name}",
      loading: "กำลังโหลด",
      not_found: "ไม่พบ",
      show: "%{name} #%{id}"
    },
    input: {
      file: {
        upload_several: "ลากไฟล์มาใส่ที่นี้ หรือคลิกเลือกไฟล์เพื่อทำการอัปโหลด",
        upload_single: "ลากไฟล์มาใส่ที่นี้ หรือคลิกเลือกไฟล์เพื่อทำการอัปโหลด"
      },
      image: {
        upload_several: "ลากรูปมาใส่ที่นี้ หรือคลิกเลือกรูปเพื่อทำการอัปโหลด",
        upload_single: "ลากรูปมาใส่ที่นี้ หรือคลิกเลือกรูปเพื่อทำการอัปโหลด"
      },
      references: {
        all_missing: "ไม่สามารถค้นหาข้อมูลอ้างอิงได้",
        many_missing: "ไม่พบข้อมูลอ้างอิง",
        single_missing: "ไม่พบข้อมูลอ้างอิง"
      }
    },
    message: {
      about: "เกี่ยวกับ",
      are_you_sure: "คุณแน่ใจใช่ไหม?",
      bulk_delete_content:
        "คุณแน่ใจใช่ไหมที่จะลบ %{name}? |||| คุณแน่ใจใช่ไหมที่จะลบ %{smart_count} รายการ?",
      bulk_delete_title: "ลบ %{name} |||| ลบ %{name} %{smart_count} รายการ",
      delete_content: "คุณแน่ใจใช่ไหมที่จะลบข้อมูลนี้?",
      delete_title: "ลบ %{name} #%{id}",
      details: "รายละเอียด",
      error: "เกิดข้อผิดพลาดของไคลเอ็นต์ทำให้คำขอของคุณไม่สามารถดำเนินการได้",
      invalid_form: "แบบฟอร์มไม่ถูกต้อง โปรดตรวจสอบข้อผิดพลาด",
      loading: "กำลังโหลดข้อมูล กรุณารอสักครู่",
      no: "ไม่",
      not_found: "คุณพิมพ์ URL ผิดหรือลิงก์ปลายทางไม่ถูกต้อง",
      yes: "ใช่"
    },
    navigation: {
      no_results: "ไม่พบผลลัพธ์",
      no_more_results: "ไม่พบหน้า %{page} กรุณากลับไปหน้าก่อนหน้านี้",
      page_out_of_boundaries: "ไม่พบหน้า %{page}",
      page_out_from_end: "ไม่มีหน้าถัดไป",
      page_out_from_begin: "ไม่มีหน้าก่อนหน้านี้",
      page_range_info: "%{offsetBegin}-%{offsetEnd} ของ %{total}",
      next: "ถัดไป",
      prev: "ย้อนกลับ"
    },
    auth: {
      username: "ชื่อผู้ใช้งาน",
      password: "รหัสผ่าน",
      sign_in: "ลงชื่อเข้าใช้",
      sign_in_error: "การตรวจสอบสิทธิ์ล้มเหลวโปรดลองอีกครั้ง",
      logout: "ออกจากระบบ"
    },
    notification: {
      updated: "อัพเดทข้อมูล |||| อัพเดท %{smart_count} ข้อมูล",
      created: "สร้างข้อมูล",
      deleted: "ลบข้อมูล |||| ลบ %{smart_count} ข้อมูล",
      bad_item: "ข้อมูลไม่ถูกต้อง",
      item_doesnt_exist: "ไม่มีข้อมูลอยู่",
      http_error: "ไม่สามารถติดต่อกับเซิร์ฟเวอร์ได้",
      data_provider_error:
        "เกิดข้อผิดพลาดระหว่างรับ-ส่งข้อมูล กรุณาตรวจสอบรายละเอียดจากคอนโซล",
      canceled: "การกระทำถูกยกเลิก"
    },
    validation: {
      required: "จำเป็นต้องกรอกข้อมูล",
      minLength: "ต้องมีตัวอักษรอย่างน้อย %{min} ตัวอักษร",
      maxLength: "ต้องมีตัวอักษรน้อยกว่า %{max} ตัวอักษร",
      minValue: "ต้องมีค่าอย่างน้อย %{min}",
      maxValue: "ต้องมีค่าน้อยกว่า %{max}",
      number: "ต้องเป็นตัวเลขเท่านั้น",
      email: "ต้องเป็นอีเมลที่ถูกต้อง",
      oneOf: "ต้องเป็นหนึ่งใน: %{options}",
      regex: "ต้องตรงกับรูปแบบเฉพาะ (regexp): %{pattern}"
    }
  }
};
