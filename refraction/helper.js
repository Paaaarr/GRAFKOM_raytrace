// helper.js -- VERSI LENGKAP DAN SESUAI

// Fungsi membuat vektor 3D (array)
// Jika tidak ada argumen, buat vektor nol.
function createVec3(x = 0, y = 0, z = 0) {
    return [x, y, z];
  }
  
  // Fungsi clone vektor: mengembalikan salinan baru dari vektor v
  function cloneVec3(v) {
    return [v[0], v[1], v[2]];
  }
  
  // Fungsi set nilai vektor: mengatur komponen vektor 'out'
  function setVec3(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out; // Mengembalikan 'out' untuk chaining jika diperlukan
  }
  
  // Fungsi copy vektor: menyalin komponen dari vektor 'a' ke vektor 'out'
  function copyVec3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  
  // Fungsi penjumlahan dua vektor: out = a + b
  function addVec3(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  
  // Fungsi pengurangan dua vektor: out = a - b
  function subtractVec3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  
  // Fungsi perkalian vektor dengan skalar: out = v * s
  function scaleVec3(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    out[2] = v[2] * s;
    return out;
  }
  
  // Fungsi scale and add: out = a + (b * scale)
  // Ini adalah operasi umum: out = vec_a + vec_b_scaled
  function scaleAndAddVec3(out, a, b, scalar) {
    out[0] = a[0] + b[0] * scalar;
    out[1] = a[1] + b[1] * scalar;
    out[2] = a[2] + b[2] * scalar;
    return out;
  }
  
  // Fungsi dot product dari dua vektor
  function dotVec3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  
  // Fungsi panjang kuadrat vektor (lebih cepat dari lengthVec3 karena tidak ada Math.sqrt)
  function squaredLengthVec3(v) {
    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
  }
  
  // Fungsi panjang vektor
  function lengthVec3(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  }
  
  // Fungsi normalisasi vektor: out = normalize(a)
  // Mengubah vektor 'a' menjadi vektor unit dan menyimpannya di 'out'
  function normalizeVec3(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z; // squared length
    if (len > 0) {
      // Hanya normalisasi jika panjangnya tidak nol
      len = 1 / Math.sqrt(len); // Ambil invers dari akar panjangnya
      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
    } else {
      // Jika vektor nol, biarkan tetap nol untuk menghindari pembagian dengan nol
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    return out;
  }
  
  // Fungsi negasi vektor: out = -a
  function negateVec3(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  
  /*
    // Tidak perlu mengekspos ke window.helper jika file ini di-include
    // sebelum script utama yang menggunakannya. Fungsi-fungsi ini akan
    // tersedia secara global di dalam scope script yang di-include setelahnya.
    // Jika Anda ingin modularitas yang lebih ketat, Anda bisa
    // membungkus ini dalam objek dan mengekspos objek tersebut,
    // lalu di index.html memanggilnya seperti helper.createVec3(), dll.
    // Tapi untuk kesederhanaan saat ini, kita biarkan global.
  
    window.helper = {
      createVec3, cloneVec3, setVec3, copyVec3, addVec3, subtractVec3,
      scaleVec3, scaleAndAddVec3, dotVec3, squaredLengthVec3, lengthVec3,
      normalizeVec3, negateVec3
    };
  */