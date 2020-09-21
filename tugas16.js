function panggilMinArray(nilai){
	return Math.min.apply(Math,nilai)
}
nilai = [45,100,99,3,2,4,1,2,3,19,22,14,10];
console.log("Nilai Minimal :",panggilMinArray(nilai))

function panggilMaxArray(nilai){
	return Math.max.apply(Math,nilai)
}
nilai = [45,100,99,3,2,4,1,2,3,19,22,14,10];
console.log("Nilai Maksimum :",panggilMaxArray(nilai))
