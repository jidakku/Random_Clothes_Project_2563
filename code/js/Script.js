
/* this JavaScript is behind the scenes of how the website works. It receives and processes data from the user.
 Since we have a lot of information, we sort different types of clothing into different folders.
 Therefore, the random image will be done by finding the path of the folder for that type of clothing. 
 then randomize the images in the folder.
 * In order to find clothes that are suitable for each person, we have to take gender, body shape, skin color and activities 
 into the process, so we have to separate the types of clothes that are suitable for various variables in the list such as
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", 
                        "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", 
                        "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", 
                        "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
 * ตัวอย่างผลการประมวลผล data/woman/formol/pants/long/Baggy/red
 * Only finished the female part and still can't randomize the picture.
 * Date: 20-2-2566
 * Author: 653040119-2 Jidapa Hongklang
 */

let gender, skin;
function firstPage(params) {
    gender = chooseGender();
    skin = chooseSkin();
    if (gender == "null") {
        Swal.fire(
            'Gender?',
            'Plese choose your gender.',
            'question'
        )

    } else if (skin == "null") {
        Swal.fire(
            'Skin?',
            'Plese choose your skintone.',
            'question'
        )
    } else {
        if (gender == "female") {
            sessionStorage.setItem("gender", gender);
            sessionStorage.setItem("skin", skin);
            document.location.href = 'Page2.html';
        } else {
            sessionStorage.setItem("gender", gender);
            sessionStorage.setItem("skin", skin);
            document.location.href = 'Page2(2).html';
        }
    }
}

let shape, typeCloth, activity, typeClothPath;
function secondPage() {
    gender = sessionStorage.getItem("gender");
    skin = sessionStorage.getItem("skin");
    shape = chooseShape();
    typeCloth = chooseCloth();
    activity = chooseAct();

    if (shape == "null") {
        Swal.fire(
            'Shape?',
            'Plese choose your shape.',
            'question'
        )
    } else if (typeCloth == "null") {
        Swal.fire(
            'Type of cloth?',
            'Plese choose your type of cloth.',
            'question'
        )
    } else if (activity == "null") {
        Swal.fire(
            'Activity?',
            'Plese choose your activity.',
            'question'
        )
    } else {
        if (gender == "female") {
            typeClothPath = "data/woman/" + typeOfCloths(typeCloth);
            typeOfActFemale(activity, shape, skin);
            sessionStorage.setItem("typeClothPath", typeClothPath);
            sessionStorage.setItem("allDresses", allDresses);
            sessionStorage.setItem("allShirt", allShirt);
            sessionStorage.setItem("allPants", allPants);
            sessionStorage.setItem("allOvercoat", allOvercoat);
            sessionStorage.setItem("allSleeve", allSleeve);
            sessionStorage.setItem("allBottomLength", allBottomLength);
            sessionStorage.setItem("allcollar", allcollar);
            sessionStorage.setItem("allSkirt", allSkirt);
            sessionStorage.setItem("pieceRandom", pieceRandom);
            sessionStorage.setItem("clothsPath1", clothsPath1);
            sessionStorage.setItem("clothsPath2", clothsPath2);
            sessionStorage.setItem("clothsPath3", clothsPath3);
            console.log(clothsPath1);
        } else {
            typeClothPath = "data/man/" + typeOfCloths(typeCloth);
            typeOfActMale(activity, shape, skin);
            //for male
        }
    }
}
// not finished -------------------------------------------
function result(params) {
    pieceRandom = sessionStorage.getItem("pieceRandom");
    clothsPath1 = sessionStorage.getItem("clothsPath1");
    clothsPath2 = sessionStorage.getItem("clothsPath2");
    clothsPath3 = sessionStorage.getItem("clothsPath3");
    console.log(clothsPath1);
    displayImage1(clothsPath1);
    displayImage2(clothsPath2);
    displayImage3(clothsPath3);
    // if (gender == "female") {
    //     // typeClothPath = sessionStorage.getItem("typeClothPath");
    //     // allDresses = sessionStorage.getItem("allDresses");
    //     // allShirt = sessionStorage.getItem("allShirt");
    //     // allPants = sessionStorage.getItem("allPants");
    //     // allOvercoat = sessionStorage.getItem("allOvercoat");
    //     // allSleeve = sessionStorage.getItem("allSleeve");
    //     // allBottomLength = sessionStorage.getItem("allBottomLength");
    //     // allcollar = sessionStorage.getItem("allcollar");
    //     // allSkirt = sessionStorage.getItem("allSkirt");
    //     // piceeOfCloths(allDresses, allShirt, allPants, allOvercoat, allSkirt, allSleeve, allBottomLength, allcollar, skin);
    // } else {
    //     //for male
    // }

}
function chooseGender(params) {
    if (document.getElementById('male').checked) {
        return "male";
    } else if (document.getElementById('female').checked) {
        return "female";
    } else {
        return "null";
    }
}
function chooseSkin(params) {
    if (document.getElementById('yellow').checked) {
        return "yellow";
    } else if (document.getElementById('pink').checked) {
        return "pink";
    } else if (document.getElementById('twotone').checked) {
        return "twotone";
    } else if (document.getElementById('tan').checked) {
        return "tan";
    } else {
        return "null";
    }
}
function chooseShape() {
    if (gender == "female") {
        if (document.getElementById('pear').checked) {
            return "pear";
        } else if (document.getElementById('apple').checked) {
            return "apple";
        } else if (document.getElementById('rectangle').checked) {
            return "rectangle";
        } else if (document.getElementById('inverted').checked) {
            return "inverted";
        } else if (document.getElementById('circle').checked) {
            return "circle";
        } else if (document.getElementById('hourglass').checked) {
            return "hourglass";
        } else {
            return "null";
        }
    } else {
        if (document.getElementById('triangle').checked) {
            return "triangle";
        } else if (document.getElementById('trapezoid').checked) {
            return "trapezoid";
        } else if (document.getElementById('inverd').checked) {
            return "inverd";
        } else if (document.getElementById('oval').checked) {
            return "oval";
        } else if (document.getElementById('rectangle').checked) {
            return "rectangle";
        } else {
            return "null";
        }
    }

}
function chooseAct(params) {
    if (document.getElementById('atHome').checked) {
        return "atHome";
    } else if (document.getElementById('outside').checked) {
        return "outside";
    } else if (document.getElementById('work').checked) {
        return "work";
    } else if (document.getElementById('exercise').checked) {
        return "exercise";
    } else if (document.getElementById('travel').checked) {
        return "travel";
    } else if (document.getElementById('party').checked) {
        return "party";
    } else {
        return "null";
    }
}
function chooseCloth(params) {
    if (document.getElementById('casual').checked) {
        return "casual";
    } else if (document.getElementById('formal').checked) {
        return "formal";
    } else if (document.getElementById('fashion').checked) {
        return "fashion";
    } else {
        return "null";
    }
}

function typeOfCloths(typeCloth) {
    switch (typeCloth) {
        case "casual":
            return "private/";
        case "formal":
            return "formal/";
        case "fashion":
            return "fashion/";
        default:
            break;
    }
}

let dressesAct = [];
let sleeveAct = [];
let shirtAct = [];
let pantsAct = [];
let overcoatAct = [];
let skirtAct = [];
let collarAct = [];
let lengthAct = [];
//list 
function typeOfActFemale(activity, shape, skin) {
    switch (activity) {
        case "atHome":
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "ยืด", "รัดรูป", "เกาะอก"];
            pantsAct = ["cutoffs", "เอวสูง", "peg", "ขาบาน", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatAct = ["ครอบ-คาร์ดิแกน", "เสื้อกั๊ก", "เสื้อคาร์ดิแกน"];
            skirtAct = ["ทรงกลม", "ทรงพลีท", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "outside":
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "work":
            dresses = ["midi", "shirt", "belted"];
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["bermuda", "เอวสูง", "ยีนส์", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "หลวม"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงกลม", "ทรงพลีท", "ทรงเอ"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "คอเหลี่ยม"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "exercise":
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + "top/exercise/" + shirtColor;
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + "pants/exercise/" + pantsColor;
            pathArray = [clothsPath1, clothsPath2];
            console.log(pathArray);
            break;
        case "travel":
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "party":
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        default:
            break;
    }
}
//for male(not finished)
function typeOfActMale(activity, shape, skin) {
    switch (activity) {
        case "atHome":
            // dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป", "เกาะอก"];
            // pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthAct = ["สั้น", "ยาว"];
            // typeOfShapeMale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "outside":
            // dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            // pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthAct = ["สั้น", "ยาว"];
            // typeOfShapeMale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "work":
            // dresses = ["mini", "midi", "shirt", "belted"];
            // sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            // pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthAct = ["สั้น", "ยาว"];
            // typeOfShapeMale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "exercise":
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + "top/exercise/" + shirtColor;
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + "pants/exercise/" + pantsColor;
            pathArray = [clothsPath1, clothsPath2];
            displayResult(pathArray);
            break;
        case "travel":
            // dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            // pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthAct = ["สั้น", "ยาว"];
            // typeOfShapeMale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "party":
            // dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtAct = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            // pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtAct = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthAct = ["สั้น", "ยาว"];
            // typeOfShapeMale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        default:
            break;
    }
}


let dressesShape = [];
let sleeveShape = [];
let shirtShape = [];
let pantsShape = [];
let overcoatShape = [];
let skirtShape = [];
let collarShape = [];
let lengthShape = [];

function typeOfShapeFemale() {
    switch (shape) {
        case "pear":
            dressesShape = ["a-line", "halterneck", "maxi", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ยีนส์", "กระบอก", "พอดีตัว", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "apple":
            dressesShape = ["a-line", "babydoll", "blouson", "halterneck", "maxi", "peplum", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอวี", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "rectangle":
            dressesShape = ["a-line", "babydoll", "blouson", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "inverted":
            dressesShape = ["a-line", "babydoll", "halterneck", "maxi", "peplum", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "ขาม้า", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเทนนิส"];
            collarShape = ["คอวี", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "circle":
            dressesShape = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "boot", "ยีนส์", "กระบอก", "พอดีตัว", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "hourglass":
            dressesShape = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "หลวม"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        default:
            break;
    }
}

//for male(not finished)
function typeOfShapeMale() {
    switch (shape) {
        case "pear":
            // dressesShape = ["a-line", "halterneck", "maxi", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ยีนส์", "กระบอก", "พอดีตัว", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "apple":
            // dressesShape = ["a-line", "babydoll", "blouson", "halterneck", "maxi", "peplum", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["เชิ้ต", "ยืด"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarShape = ["คอกลม", "คอวี", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["สั้น", "ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "rectangle":
            // dressesShape = ["a-line", "babydoll", "blouson", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["สั้น", "ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "inverted":
            // dressesShape = ["a-line", "babydoll", "halterneck", "maxi" , "peplum", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "ขาม้า", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเทนนิส"];
            // collarShape = ["คอวี", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["สั้น", "ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "circle":
            // dressesShape = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์","boot",  "ยีนส์", "กระบอก", "พอดีตัว", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["สั้น", "ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "hourglass":
            // dressesShape = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            // sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            // shirtShape = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            // pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "bell", "boot", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "หลวม"];
            // overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อกั๊ก", "เสื้อขนแกะ", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            // skirtShape = ["ทรงกลม", "ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            // collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            // lengthShape = ["สั้น", "ยาว"];
            // allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
            //     , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        default:
            break;
    }
}

//--------------------------------------------------------------------
let allDresses = [];
let allShirt = [];
let allPants = [];
let allOvercoat = [];
let allSkirt = [];
let allcollar = [];
let allSleeve = [];
let allBottomLength = [];

function allCloths(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
    , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin) {
    allDresses = dressesAct.concat(dressesShape);
    allShirt = shirtAct.concat(shirtShape);
    allPants = pantsAct.concat(pantsShape);
    allOvercoat = overcoatAct.concat(overcoatShape);
    allSkirt = skirtAct.concat(skirtShape);
    allcollar = collarAct.concat(collarShape);
    allSleeve = sleeveAct.concat(sleeveShape);
    allBottomLength = lengthAct.concat(lengthShape);
    piceeOfCloths(allDresses, allShirt, allPants, allOvercoat, allSkirt, allSleeve, allBottomLength, allcollar, skin);
}
//-----------------------------------------หาค่าในArrayที่ซ้ำกัน-----------------------------------------------
function sameVariable(a) {
    let b = [];
    let sameVar = []
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            b.push(a[i]);
        } else {
            sameVar.push(a[i]);
        }
    }
    let random = sameVar[Math.floor(Math.random() * sameVar.length)];
    console.log(random);
    return random;
}
//--------------------------------------------------------------------------------------------
var clothsPath1, clothsPath2, clothsPath3;
var shirtPath;
var dressPath;
var pantsPath;
var skirtPath;
var coatPath;
var dressesColor, shirtColor, pantsColor, skirtColor, coatColor;
var pathArray;
function piceeOfCloths(allDresses, allShirt, allPants, allOvercoat, allSkirt, allSleeve, allBottomLength, allcollar, skin) {
    let piece = ["one_piece", "two_piece_A", "three_piece_A", "two_piece_B", "three_piece_A"];
    let pieceRandom = piece[Math.floor(Math.random() * piece.length)];
    switch (pieceRandom) {
        case "one_piece":
            dressPath = randomDresses(allDresses);
            dressesColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + dressPath + dressesColor;
            displayImage1(clothsPath1);
            console.log(clothsPath1);
            document.location.href = 'Page3.html';
            break;
        case "two_piece_A":
            //random shirt
            shirtPath = randomShirt(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            //random pants
            pantsPath = randomPants(allPants, allBottomLength);
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            document.location.href = 'Page3(2).html';
            break;
        case "two_piece_B":
            //random shirt
            shirtPath = randomShirt(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            //random skirt
            skirtPath = randomSkirt(allSkirt, allBottomLength);
            skirtColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + skirtPath + skirtColor;
            console.log(clothsPath1);
            console.log(clothsPath2);
            document.location.href = 'Page3(2).html';
            break;
        case "three_piece_A":
            shirtPath = randomShirt(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            pantsPath = randomPants(allPants, allBottomLength);
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            coatPath = randomCoat(allOvercoat);
            coatColor = colorOfSkin(skin);
            clothsPath3 = typeClothPath + coatPath + coatColor;
            document.location.href = 'Page3(3).html';
            break;
        case "three_piece_B":
            shirtPath = randomShirt(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            skirtPath = randomSkirt(allSkirt, allBottomLength);
            skirtColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + skirtPath + skirtColor;
            coatPath = randomCoat(allOvercoat);
            coatColor = colorOfSkin(skin);
            clothsPath3 = typeClothPath + coatPath + coatColor;
            console.log(clothsPath1);
            console.log(clothsPath2);
            console.log(clothsPath3);
            document.location.href = 'Page3(3).html';
            break;
        default:
            break;
    }
}
//--------------------------------------------------------------------------------

//----------------------------random picture1--------------------------------------
let xhr = new XMLHttpRequest();
function displayImage1(folder) {
    xhr.open("GET", folder, true);
    xhr.responseType = "document";
    xhr.onload = function () {
        let images = xhr.responseXML.getElementsByTagName("a");
        let imageArray = [];
        for (let i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage1").src = randomImage;
    };
    xhr.send();
}
//----------------------------random picture2--------------------------------------
function displayImage2(folder) {
    xhr.open("GET", folder, true);
    xhr.responseType = "document";
    xhr.onload = function () {
        let images = xhr.responseXML.getElementsByTagName("a");
        let imageArray = [];
        for (let i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage2").src = randomImage;
    };
    xhr.send();
}
//----------------------------random picture--------------------------------------
function displayImage3(folder) {
    xhr.open("GET", folder, true);
    xhr.responseType = "document";
    xhr.onload = function () {
        let images = xhr.responseXML.getElementsByTagName("a");
        let imageArray = [];
        for (let i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage3").src = randomImage;
    };
    xhr.send();
}

//function colorOfSkin will takes one parameter skin and returns a random color from an array based on the input skin color.
let color = [];
let colorRandom;
function colorOfSkin(skin) {
    switch (skin) {
        case "yellow":
            color = ["brown", "sky blue", "red", "orange", "yellow", "white", "cream", "pink", "black", "blue", "purple"];
            return color[Math.floor(Math.random() * color.length)];

        case "pink":
            color = ["brown", "sky blue", "red", "orange", "yellow", "white", "cream", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];

        case "twotone":
            color = ["brown", "sky blue", "white", "cream", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];

        case "tan":
            color = ["brown", "sky blue", "white", "cream", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];
        default:
            break;
    }
}

function randomDresses(allDresses) {
    var dresses = sameVariable(allDresses);
    switch (dresses) {
        case "a-line":
            return "dress/a-line/";
        case "babydoll":
            return "dress/babydoll/";
        case "blouson":
            return "dress/blouson/";
        case "bodycon":
            return "dress/bodycon/";
        case "halterneck":
            return "dress/halterneck/";
        case "maxi":
            return "dress/maxi/";
        case "mini":
            return "dress/mini/";
        case "peplum":
            return "dress/peplum/";
        case "sheath":
            return "dress/sheath/";
        case "shift":
            return "dress/shift/";
        case "shirt":
            return "dress/shirt/";
        case "skater":
            return "dress/skater/";
        case "slip":
            return "dress/slip/";
        case "tent":
            return "dress/tent/";
        case "wrap":
            return "dress/wrap/";
        default:
            break;
    }
}
function randomShirt(allSleeve, allShirt, allcollar) {
    var sleeveRandom = sameVariable(allSleeve);
    switch (sleeveRandom) {
        case "แขนสั้น":
            var shirtRandom = sameVariable(allShirt);
            switch (shirtRandom) {
                case "ครอป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/short-sleeved/cropped top/round neck/";
                        case "คอเต่า":
                            return "top/short-sleeved/cropped top/turtle neck/";
                        case "คอวี":
                            return "top/short-sleeved/cropped top/V-neck/";
                        case "เปิดไหล่":
                            return "top/short-sleeved/cropped top/off shoulder/";
                        case "คอเหลี่ยม":
                            return "top/short-sleeved/cropped top/square neck/";
                        default:
                            break;
                    }
                    break;
                case "เชิ้ต":
                    var collarRandom = sameVariable(allcollar);
                    if (collarRandom == "เปิดไหล่") {
                        return "top/short-sleeved/shirt/off shoulder/";
                    } else {
                        return "top/short-sleeved/shirt/normal/";
                    }

                    break;
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอเต่า":
                            return "top/short-sleeved/T-shirt/turtle neck/";
                        case "คอวี":
                            return "top/short-sleeved/T-shirt/V-neck/";
                        case "เปิดไหล่":
                            return "top/short-sleeved/T-shirt/off shoulder/";
                        case "คอกลม":
                            return "top/short-sleeved/T-shirt/round neck/";
                        default:
                            break;
                    }
                    break;
                case "รัดรูป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/short-sleeved/Tights/round neck/";
                        case "คอเต่า":
                            return "top/short-sleeved/Tights/turtle neck/";
                        case "คอวี":
                            return "top/short-sleeved/Tights/V-neck/";
                        case "เปิดไหล่":
                            return "top/short-sleeved/Tights/off shoulder/";
                        case "คอเหลี่ยม":
                            return "top/short-sleeved/Tights/square neck/";
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case "แขนยาว":
            var shirtRandom = sameVariable(allShirt);
            switch (shirtRandom) {
                case "ครอป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/long-sleeved/cropped top/round neck/";
                        case "คอเต่า":
                            return "top/long-sleeved/cropped top/turtle neck/";
                        case "คอวี":
                            return "top/long-sleeved/cropped top/V-neck/";
                        case "เปิดไหล่":
                            return "top/long-sleeved/cropped top/off shoulder/";
                        case "คอเหลี่ยม":
                            return "top/long-sleeved/cropped top/square neck/";
                        default:
                            break;
                    }
                    break;
                case "เชิ้ต":
                    var collarRandom = sameVariable(allcollar);
                    if (collarRandom == "เปิดไหล่") {
                        return "top/short-sleeved/shirt/off shoulder/";
                    } else {
                        return "top/short-sleeved/shirt/normal/";
                    }
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอเต่า":
                            return "top/long-sleeved/T-shirt/turtle neck/";
                        case "คอวี":
                            return "top/long-sleeved/T-shirt/V-neck/";
                        case "เปิดไหล่":
                            return "top/long-sleeved/T-shirt/off shoulder";
                        case "คอกลม":
                            return "top/long-sleeved/T-shirt/round neck/";
                        default:
                            break;
                    }
                    break;
                case "รัดรูป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/long-sleeved/Tights/round neck/";
                        case "คอเต่า":
                            return "top/long-sleeved/Tights/turtle neck/";
                        case "คอวี":
                            return "top/long-sleeved/Tights/V-neck/";
                        case "เปิดไหล่":
                            return "top/long-sleeved/Tights/off shoulder/";
                        case "คอเหลี่ยม":
                            return "top/long-sleeved/Tights/square neck/";
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case "แขนกุด":
            var shirtRandom = sameVariable(allShirt);
            switch (shirtRandom) {
                case "เกาะอก":
                    return "top/sleeveless/strapless/";
                case "ครอป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/sleeveless/cropped top/round neck/";
                        case "คอเต่า":
                            return "top/sleeveless/cropped top/turtle neck/";
                        case "คอวี":
                            return "top/sleeveless/cropped top/V-neck/";
                        case "สายเดี่ยว":
                            return "top/sleeveless/cropped top/camisole/";
                        case "คอเหลี่ยม":
                            return "top/sleeveless/cropped top/square neck/";
                        default:
                            break;
                    }
                    break;
                case "เชิ้ต":
                    return "top/sleeveless/shirt/";
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/sleeveless/T-shirt/round neck/";
                        case "คอเต่า":
                            return "top/sleeveless/T-shirt/turtle neck/";
                        case "คอวี":
                            return "top/sleeveless/T-shirt/V-neck/";
                        case "สายเดี่ยว":
                            return "top/sleeveless/T-shirt/camisole/";
                        case "คอเหลี่ยม":
                            return "top/sleeveless/T-shirt/square neck/";
                        default:
                            break;
                    }
                    break;
                case "รัดรูป":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอกลม":
                            return "top/sleeveless/Tights/round neck/"
                        case "คอเต่า":
                            return "top/sleeveless/Tights/turtle neck/"
                        case "คอวี":
                            return "top/sleeveless/Tights/V-neck/"
                        case "สายเดี่ยว":
                            return "top/sleeveless/Tights/camisole/"
                        case "คอเหลี่ยม":
                            return "top/sleeveless/Tights/square neck/"
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}
//---------------------------------------------------------------------------------
function randomPants(allPants, allBottomLength) {
    var pantsRandom = sameVariable(allPants);
    switch (pantsRandom) {
        case "bell":
            return "pants/long/Bell Bottom/"
        case "boot":
            return "pants/long/Boot cut/"
        case "peg":
            return "pants/long/Peg top/"
        case "ขาบาน":
            return "pants/long/Wide Leg/"
        case "ยีนส์":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "pants/short/cutoffs/"
                case "ยาว":
                    return "pants/long/Jeans/"
                default:
                    break;
            }
        case "กระบอก":
            return "pants/long/Straight/"
        case "ขาม้า":
            return "pants/long/Flare/"
        case "พอดีตัว":
            return "pants/long/Slim Fit/"
        case "หลวม":
            return "pants/long/Baggy/"
        case "bermuda":
            return "pants/short/Bermuda shorts/"
        case "biker":
            return "pants/short/Biker shorts/"
        case "Cutoffs":
            return "pants/short/Cutoffs shorts/"
        case "เอวสูง":
            return "pants/short/High-Waisted Shorts/"
        default:
            break;
    }
}
//---------------------------------------------------------------------------------
function randomSkirt(allSkirt, allBottomLength) {
    var skirtramdom = sameVariable(allSkirt);
    switch (skirtramdom) {
        case "ทรงกลม":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "skirt/short/Circle Skirt/"
                case "ยาว":
                    return "skirt/long/Circle Skirt/"
                default:
                    break;
            }
        case "ทรงเจ้าหญิง":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "skirt/short/Tulle Skirt/"
                case "ยาว":
                    return "skirt/long/Tulle Skirt/"
                default:
                    break;
            }
        case "ทรงพลีท":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "skirt/short/Pleated Skirt/"
                case "ยาว":
                    return "skirt/long/Pleated Skirt/"
                default:
                    break;
            }
        case "ทรงเอ":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "skirt/short/A-Line Skirt/"
                case "ยาว":
                    return "skirt/long/A-Line Skirt/"
                default:
                    break;
            }
        case "ทรงเทนนิส":
            return "skirt/short/Tennis Skirt"
        default:
            break;
    }
}
//--------------------------------------------------------------------------------
function randomCoat(params) {
    var overcoatRandom = sameVariable(allOvercoat)
    switch (overcoatRandom) {
        case "bomber":
            return "overcoat/Bomber jacket/"
        case "pea":
            return "overcoat/Pea coat/"
        case "trench":
            return "overcoat/Trench coat/"
        case "ครอป-คาร์ดิแกน":
            return "overcoat/Cropped Cardigan/"
        case "แจ็คเก้ตยีนส์":
            return "overcoat/Jeans/"
        case "แจ็คเก้ตหนัง":
            return "overcoat/Leather/"
        case "เสื้อกั๊ก":
            return "overcoat/Vest/"
        case "เสื้อขนแกะ":
            return "overcoat/Fleece Jacket/"
        case "เสื้อคาร์ดิแกน":
            return "overcoat/Cardigan/"
        case "เสื้อทรงสูท":
            return "overcoat/Blazer/"
        default:
            break;
    }
}