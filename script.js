function show_popap(id_popap) {
    var id = "#" + id_popap;
    $(id).addClass('active');
}
  
$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
});

function show_popap_second(id_popap){
  var id = "#" + id_popap;
  $(id).addClass('active');
}
$(".close_popap_second").click( function(){
  $(".overlay_second").removeClass("active");
});


      // КАЛЬКУЛЯТОР



// Масса

function m1(){
  let v = document.getElementById('inp_1').value;
  let M = document.getElementById('inp_2').value;
  let result = v * M;
  document.getElementById('result-m-1').innerHTML = result;
}

function m2(){
  let V = document.getElementById('inp_3').value;
  let M = document.getElementById('inp_4').value;
  let Vm = document.getElementById('inp_5').value;
  let result = V / Vm * M;
  document.getElementById('result-m-2').innerHTML = result;
}

function m3(){
  let N = document.getElementById('inp_6').value;
  let M = document.getElementById('inp_7').value;
  let C = document.getElementById('inp_8').value;
  let result = C * M * N;
  document.getElementById('result-m-3').innerHTML = result;
}

function m4(){
  let N = document.getElementById('inp_9').value;
  let Nᴀ = document.getElementById('inp_10').value;
  let M = document.getElementById('inp_11').value;
  let result = N / Nᴀ * M;
  document.getElementById('result-m-4').innerHTML = result;
}

// Кол-во в-ва

function n1(){
  let m = document.getElementById('inp_12').value;
  let M = document.getElementById('inp_13').value;
  let result = m * M;
  document.getElementById('result-n-1').innerHTML = result;
}

function n2(){
  let V = document.getElementById('inp_14').value;
  let Vm = document.getElementById('inp_15').value;
  let result = V / Vm;
  document.getElementById('result-n-2').innerHTML = result;
}

function n3(){
  let N = document.getElementById('inp_16').value;
  let Nᴀ = document.getElementById('inp_17').value;
  let result = N / Nᴀ;
  document.getElementById('result-n-3').innerHTML = result;
}

function n4(){
  let Q = document.getElementById('inp_18').value;
  let Qm = document.getElementById('inp_19').value;
  let result = Q / Qm;
  document.getElementById('result-n-4').innerHTML = result;
}

// Объём

function V1(){
  let n = document.getElementById('inp_20').value;
  let Vm = document.getElementById('inp_21').value;
  let result = n / Vm;
  document.getElementById('result-V-1').innerHTML = result;
}

function V2(){
  let m = document.getElementById('inp_22').value;
  let M = document.getElementById('inp_23').value;
  let Vm = document.getElementById('inp_24').value;
  let result = m / M * Vm;
  document.getElementById('result-V-2').innerHTML = result;
}

function V3(){
  let m = document.getElementById('inp_25').value;
  let p = document.getElementById('inp_26').value;
  let result = m / p;
  document.getElementById('result-V-3').innerHTML = result;
}

function V4(){
  let N = document.getElementById('inp_27').value;
  let Nᴀ = document.getElementById('inp_28').value;
  let Vm = document.getElementById('inp_29').value;
  let result = N / Nᴀ * Vm;
  document.getElementById('result-V-4').innerHTML = result;
}

// Число частиц

function N01(){
  let m = document.getElementById('inp_30').value;
  let m0 = document.getElementById('inp_31').value;
  let result = m / m0;
  document.getElementById('result-N0-1').innerHTML = result;
}

function N02(){
  let v = document.getElementById('inp_32').value;
  let Na = document.getElementById('inp_33').value;
  let result = v * Na;
  document.getElementById('result-N0-2').innerHTML = result;
}

function N03(){
  let m = document.getElementById('inp_34').value;
  let M = document.getElementById('inp_35').value;
  let Na = document.getElementById('inp_36').value;
  let result = m / M * Na;
  document.getElementById('result-N0-3').innerHTML = result;
}

function N04(){
  let V = document.getElementById('inp_37').value;
  let Vm = document.getElementById('inp_38').value;
  let Na = document.getElementById('inp_39').value;
  let result = V / Vm * Na;
  document.getElementById('result-N0-4').innerHTML = result;
}

// Молярный объём

function Vm1(){
  let V = document.getElementById('inp_40').value;
  let v = document.getElementById('inp_41').value;
  let result = V / v;
  document.getElementById('result-Vm-1').innerHTML = result;
}

function Vm2(){
  let V = document.getElementById('inp_42').value;
  let M = document.getElementById('inp_43').value;
  let m = document.getElementById('inp_44').value;
  let result = V * M / m;
  document.getElementById('result-Vm-2').innerHTML = result;
}

function Vm3(){
  let M = document.getElementById('inp_45').value;
  let p = document.getElementById('inp_46').value;
  let result = M / p;
  document.getElementById('result-Vm-3').innerHTML = result;
}

function Vm4(){
  let V = document.getElementById('inp_47').value;
  let Na = document.getElementById('inp_48').value;
  let N0 = document.getElementById('inp_49').value;
  let result = V * Na / N0;
  document.getElementById('result-Vm-4').innerHTML = result;
}

// Молярная масса

function M1(){
  let m = document.getElementById('inp_50').value;
  let v = document.getElementById('inp_51').value;
  let result = m / v;
  document.getElementById('result-M-1').innerHTML = result;
}

function M2(){
  let Vm = document.getElementById('inp_52').value;
  let p = document.getElementById('inp_53').value;
  let result = Vm * p;
  document.getElementById('result-M-2').innerHTML = result;
}

function M3(){
  let m0 = document.getElementById('inp_54').value;
  let Nᴀ = document.getElementById('inp_55').value;
  let result = m0 * Nᴀ;
  document.getElementById('result-M-3').innerHTML = result;
}

function M4(){
  let m = document.getElementById('inp_56').value;
  let Vm = document.getElementById('inp_57').value;
  let V = document.getElementById('inp_58').value;
  let result = m * Vm / V;
  document.getElementById('result-M-4').innerHTML = result;
}

function M5(){
  let m = document.getElementById('inp_59').value;
  let Nᴀ = document.getElementById('inp_60').value;
  let N0 = document.getElementById('inp_61').value;
  let result = m * Nᴀ / N0;
  document.getElementById('result-M-5').innerHTML = result;
}

// Относительная молекулярная масса

function Mr1(){
  let M = document.getElementById('inp_62').value;
  let D = document.getElementById('inp_63').value;
  let result = M * D;
  document.getElementById('result-Mr-1').innerHTML = result;
}

function Mr2(){
  let x = document.getElementById('inp_64').value;
  let a = document.getElementById('inp_65').value;
  let A = document.getElementById('inp_66').value;
  let B = document.getElementById('inp_67').value;
  let result = x * A + a * B;
  document.getElementById('result-Mr-2').innerHTML = result;
}

// Молярная концетрация

function C1(){
  let n = document.getElementById('inp_68').value;
  let V = document.getElementById('inp_69').value;
  let result = n / V;
  document.getElementById('result-C-1').innerHTML = result;
}

// Массовая доля

function massShare1(){
  let Ar = document.getElementById('inp_70').value;
  let N = document.getElementById('inp_71').value;
  let Mr = document.getElementById('inp_72').value;
  let result = Ar * N / Mr ;
  document.getElementById('result-massShare-1').innerHTML = result;
}

function massShare2(){
  let m1 = document.getElementById('inp_73').value;
  let m2 = document.getElementById('inp_74').value;
  let result = m1 / m2 * 100 ;
  document.getElementById('result-massShare-2').innerHTML = result;
}

// Выход продукта

function exit1(){
  let m1 = document.getElementById('inp_75').value;
  let m2 = document.getElementById('inp_76').value;
  let result = m1 / m2 * 100 ;
  document.getElementById('result-exit-1').innerHTML = result;
}

function exit2(){
  let V1 = document.getElementById('inp_77').value;
  let V2 = document.getElementById('inp_78').value;
  let result = V1 / V2 * 100 ;
  document.getElementById('result-exit-2').innerHTML = result;
}

function exit3(){
  let n1 = document.getElementById('inp_79').value;
  let n2 = document.getElementById('inp_80').value;
  let result = n1 / n2 * 100 ;
  document.getElementById('result-exit-3').innerHTML = result;
}

// Относительная плотность

function D1(){
  let M = document.getElementById('inp_81').value;
  let M2 = document.getElementById('inp_82').value;
  let result = M / M2 ;
  document.getElementById('result-D-1').innerHTML = result;
}

function D2(){
  let p1 = document.getElementById('inp_83').value;
  let p2 = document.getElementById('inp_84').value;
  let result = p1 / p2 ;
  document.getElementById('result-D-2').innerHTML = result;
}

function D3(){
  let M1 = document.getElementById('inp_85').value;
  let M2 = document.getElementById('inp_86').value;
  let result = M1 / M2 ;
  document.getElementById('result-D-3').innerHTML = result;
}

function D4(){
  let Mr1 = document.getElementById('inp_87').value;
  let Mr2 = document.getElementById('inp_88').value;
  let result = Mr1 / Mr2 ;
  document.getElementById('result-D-4').innerHTML = result;
}

// Число Авогадро

function Na1(){
  let N0 = document.getElementById('inp_89').value;
  let v = document.getElementById('inp_90').value;
  let result = N0 / v ;
  document.getElementById('result-Na-1').innerHTML = result;
}

function Na2(){
  let M = document.getElementById('inp_91').value;
  let m = document.getElementById('inp_92').value;
  let N0 = document.getElementById('inp_93').value;
  let result = M / m * N0  ;
  document.getElementById('result-Na-2').innerHTML = result;
}

function Na3(){
  let N0 = document.getElementById('inp_94').value;
  let Vm = document.getElementById('inp_95').value;
  let V = document.getElementById('inp_96').value;
  let result = N0 * Vm / V  ;
  document.getElementById('result-Na-3').innerHTML = result;
}

function Na4(){
  let M = document.getElementById('inp_97').value;
  let m0 = document.getElementById('inp_98').value;
  let result = M / m0  ;
  document.getElementById('result-Na-4').innerHTML = result;
}