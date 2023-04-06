/* his JavaScript is behind the scenes of how the website works. It receives and processes data from the user.
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
 * Date: 7-4-2566
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
        random(gender, skin, shape, typeCloth, activity);
    }
}

function random(gender, skin, shape, typeCloth, activity) {
    if (gender == "female") {
        typeClothPath = "data/woman/" + typeOfCloths(typeCloth);
        typeOfActFemale(activity, shape, skin);
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("activity", activity);
        sessionStorage.setItem("shape", shape);
        sessionStorage.setItem("skin", skin)
        sessionStorage.setItem("typeClothPath", typeClothPath);
        sessionStorage.setItem("pieceRandom", pieceRandom);
        sessionStorage.setItem("clothsPath1", clothsPath1);
        sessionStorage.setItem("clothsPath2", clothsPath2);
        sessionStorage.setItem("clothsPath3", clothsPath3);
        if (pieceRandom == "one_piece") {
            document.location.href = 'Page3.html';
        } else if ((pieceRandom == "two_piece_A") || (pieceRandom == "two_piece_B")) {
            document.location.href = 'Page3(2).html';
        } else if ((pieceRandom == "three_piece_A") || (pieceRandom == "three_piece_B")) {
            document.location.href = 'Page3(3).html';
        } else {
            console.log("error");
        }
    } else {
        typeClothPath = "data/man/" + typeOfCloths(typeCloth);
        typeOfActMale(activity, shape, skin);
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("activity", activity);
        sessionStorage.setItem("shape", shape);
        sessionStorage.setItem("skin", skin)
        sessionStorage.setItem("typeClothPath", typeClothPath);
        sessionStorage.setItem("pieceRandom", pieceRandom);
        sessionStorage.setItem("clothsPath1", clothsPath1);
        sessionStorage.setItem("clothsPath2", clothsPath2);
        sessionStorage.setItem("clothsPath3", clothsPath3);
        if ((pieceRandom == "two_piece_A")) {
            document.location.href = 'Page3(2).html';
        } else if ((pieceRandom == "three_piece_A")) {
            document.location.href = 'Page3(3).html';
        } else {
            console.log("error");
        }
    }

}

function backPage(params) {
    gender = sessionStorage.getItem("gender");
    if (gender == "female") {
        document.location.href = 'Page2.html';
    } else {
        document.location.href = 'Page2(2).html';
    }
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

function result() {
    clothsPath1 = sessionStorage.getItem("clothsPath1");
    clothsPath2 = sessionStorage.getItem("clothsPath2");
    clothsPath3 = sessionStorage.getItem("clothsPath3");
    pieceRandom = sessionStorage.getItem("pieceRandom", pieceRandom);
    displayImage1(clothsPath1);
    displayImage2(clothsPath2);
    displayImage3(clothsPath3);
    console.log(clothsPath1);
    console.log(clothsPath2);
    console.log(pieceList);
}

function newResult(params) {
    typeClothPath = sessionStorage.getItem("typeClothPath");
    skin = sessionStorage.getItem("skin");
    activity = sessionStorage.getItem("activity");
    shape = sessionStorage.getItem("shape");
    gender = sessionStorage.getItem("gender");
    clothsPath1 = sessionStorage.getItem("clothsPath1");
    clothsPath2 = sessionStorage.getItem("clothsPath2");
    clothsPath3 = sessionStorage.getItem("clothsPath3");
    if (gender == "female") {
        typeOfActFemale(activity, shape, skin);
    } else {
        typeOfActMale(activity, shape, skin);
    }
    sessionStorage.setItem("clothsPath1", clothsPath1);
    sessionStorage.setItem("clothsPath2", clothsPath2);
    sessionStorage.setItem("clothsPath3", clothsPath3);
    sessionStorage.setItem("pieceRandom", pieceRandom);
    sessionStorage.setItem("gender", gender);
    if (pieceRandom == "one_piece") {
        document.location.href = 'Page3.html';
    } else if ((pieceRandom == "two_piece_A") || (pieceRandom == "two_piece_B")) {
        document.location.href = 'Page3(2).html';
    } else if ((pieceRandom == "three_piece_A") || (pieceRandom == "three_piece_B")) {
        document.location.href = 'Page3(3).html';
    } else {
        console.log("error");
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
            dressesAct = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "ยืด", "เกาะอก"];
            pantsAct = ["peg", "ขาบาน", "กระบอก", "ขาม้า", "พอดีตัว"];
            overcoatAct = ["ครอบ-คาร์ดิแกน", "เสื้อกั๊ก", "เสื้อคาร์ดิแกน"];
            skirtAct = ["ทรงกลม", "ทรงพลีท", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "คอเหลี่ยม", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "outside":
            dressesAct = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "work":
            dressesAct = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["bermuda", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงพลีท", "ทรงเอ"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "exercise":
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + "top/exercise/" + shirtColor;
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + "pants/exercise/" + pantsColor;
            pieceRandom = "two_piece_A";
            break;
        case "travel":
            dressesAct = ["a-line", "babydoll", "blouson", "bodycon", "halterneck", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "skater", "slip", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeFemale(shape, dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct, skin);
            break;
        case "party":
            dressesAct = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["ครอป", "เชิ้ต", "ยืด"];
            pantsAct = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว"];
            overcoatAct = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtAct = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarAct = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
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
            sleeveAct = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["Baggy", "Slim Fit", "Straight"];
            collarAct = ["คอกลม", "คอวี"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeMale(shape, sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, skin);
            break;
        case "outside":
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["Baggy", "Slim Fit", "Straight"];
            collarAct = ["คอกลม", "คอวี"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeMale(shape, sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, skin);
            break;
        case "work":
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["Slim Fit", "Straight"];
            collarAct = ["คอกลม", "คอวี"];
            lengthAct = ["ยาว"];
            typeOfShapeMale(shape, sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, skin);
            break;
        case "exercise":
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + "top/exercise/" + shirtColor;
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + "pants/exercise/" + pantsColor;
            pieceRandom = "two_piece_A";
            break;
        case "travel":
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["Slim Fit", "Straight"];
            collarAct = ["คอกลม", "คอวี"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeMale(shape, sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, skin);
            break;
        case "party":
            sleeveAct = ["แขนสั้น", "แขนยาว"];
            shirtAct = ["เชิ้ต", "ยืด"];
            pantsAct = ["Baggy", "Slim Fit", "Straight"];
            collarAct = ["คอกลม", "คอวี"];
            lengthAct = ["สั้น", "ยาว"];
            typeOfShapeMale(shape, sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, skin);
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
            dressesShape = ["a-line", "maxi", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ยีนส์", "กระบอก", "พอดีตัว"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "apple":
            dressesShape = ["a-line", "blouson", "maxi", "peplum", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอวี", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "rectangle":
            dressesShape = ["a-line", "blouson", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า", "พอดีตัว"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "inverted":
            dressesShape = ["a-line", "maxi", "peplum", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "ขาม้า"];
            overcoatShape = ["bomber", "pea", "trench", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเทนนิส"];
            collarShape = ["คอวี", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "circle":
            dressesShape = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "ยีนส์", "กระบอก", "พอดีตัว"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        case "hourglass":
            dressesShape = ["a-line", "blouson", "bodycon", "maxi", "mini", "peplum", "sheath", "shift", "shirt", "tent", "wrap"];
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["ครอป", "เชิ้ต", "ยืด", "รัดรูป"];
            pantsShape = ["bermuda", "biker", "cutoffs", "เอวสูง", "ยีนส์", "peg", "ขาบาน", "ยีนส์", "กระบอก", "ขาม้า"];
            overcoatShape = ["bomber", "pea", "trench", "ครอบ-คาร์ดิแกน", "แจ็คเก็ตยีนส์", "แจ็คเก็ตหนัง", "เสื้อคาร์ดิแกน", "เสื้อทรงสูท"];
            skirtShape = ["ทรงเจ้าหญิง", "ทรงพลีท", "ทรงเอ", "ทรงเทนนิส"];
            collarShape = ["คอกลม", "คอเต่า", "คอวี", "เปิดไหล่", "เกาะอก", "สายเดี่ยว"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
                , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin);
            break;
        default:
            break;
    }
}

//for male(not finished)
function typeOfShapeMale() {
    switch (shape) {
        case "triangle":
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["Baggy", "Slim Fit", "Straight"];
            collarShape = ["คอกลม", "คอวี"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin)
            break;
        case "trapezoid":
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["Baggy", "Slim Fit", "Straight"];
            collarShape = ["คอกลม", "คอวี"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin)
            break;
        case "inverd":
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["Baggy", "Slim Fit", "Straight"];
            collarShape = ["คอกลม", "คอวี"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin)
            break;
        case "oval":
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["Baggy", "Slim Fit", "Straight"];
            collarShape = ["คอกลม", "คอวี"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin)
            break;
        case "rectangle":
            sleeveShape = ["แขนสั้น", "แขนยาว", "แขนกุด"];
            shirtShape = ["เชิ้ต", "ยืด"];
            pantsShape = ["Baggy", "Slim Fit", "Straight"];
            collarShape = ["คอกลม", "คอวี"];
            lengthShape = ["สั้น", "ยาว"];
            allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin)
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
function allClothsFemale(dressesAct, sleeveAct, shirtAct, pantsAct, overcoatAct, skirtAct, collarAct, lengthAct
    , dressesShape, sleeveShape, skirtShape, shirtShape, pantsShape, overcoatShape, collarShape, lengthShape, skin) {
    allDresses = dressesAct.concat(dressesShape);
    allShirt = shirtAct.concat(shirtShape);
    allPants = pantsAct.concat(pantsShape);
    allOvercoat = overcoatAct.concat(overcoatShape);
    allSkirt = skirtAct.concat(skirtShape);
    allcollar = collarAct.concat(collarShape);
    allSleeve = sleeveAct.concat(sleeveShape);
    allBottomLength = lengthAct.concat(lengthShape);

    piceeOfClothsFemale(allDresses, allShirt, allPants, allOvercoat, allSkirt, allSleeve, allBottomLength, allcollar, skin);
}

function allClothsMale(sleeveAct, shirtAct, pantsAct, collarAct, lengthAct, sleeveShape, shirtShape, pantsShape, collarShape, lengthShape, skin) {
    allShirt = shirtAct.concat(shirtShape);
    allSleeve = sleeveAct.concat(sleeveShape);
    allcollar = collarAct.concat(collarShape);
    allBottomLength = lengthAct.concat(lengthShape);
    allPants = pantsAct.concat(pantsShape);
    piceeOfClothsMale(allShirt, allPants, allSleeve, allBottomLength, allcollar, skin);
}
//-----------------------------------------หาค่าในArrayที่ซ้ำกัน-----------------------------------------------
function sameVariable(a) {
    var b = [];
    var sameVar = []
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            b.push(a[i]);
        } else {
            sameVar.push(a[i]);
        }
    }
    var random = sameVar[Math.floor(Math.random() * sameVar.length)];
    return random;
}

function formalCloth(x, string) {
    var a = [];
    var short = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] == string) {
            short.push(x[i])
        } else {
            a.push(x[i]);
        }
    }
    return a;
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
var piece, pieceRandom;
function piceeOfClothsFemale(allDresses, allShirt, allPants, allOvercoat, allSkirt, allSleeve, allBottomLength, allcollar, skin) {
    piece = ["one_piece", "two_piece_A", "three_piece_A", "two_piece_B", "three_piece_A"];
    pieceRandom = piece[Math.floor(Math.random() * piece.length)];
    switch (pieceRandom) {
        case "one_piece":
            dressPath = randomDresses(allDresses);
            dressesColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + dressPath + dressesColor;
            break;
        case "two_piece_A":
            //random shirt
            shirtPath = randomShirtFemale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            //random pants
            pantsPath = randomPantsFemale(allPants, allBottomLength);
            if (pantsPath.includes("Jeans")) {
                color = ["black", "blue", "dark blue", "light blue"];
                pantsColor = color[Math.floor(Math.random() * color.length)];
            } else {
                pantsColor = colorOfSkin(skin);
            }
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            break;
        case "two_piece_B":
            //random shirt
            shirtPath = randomShirtFemale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            //random skirt
            skirtPath = randomSkirt(allSkirt, allBottomLength);
            skirtColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + skirtPath + skirtColor;
            break;
        case "three_piece_A":
            shirtPath = randomShirtFemale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            pantsPath = randomPantsFemale(allPants, allBottomLength);
            if (pantsPath.includes("Jeans")) {
                color = ["black", "blue", "dark blue", "light blue"];
                pantsColor = color[Math.floor(Math.random() * color.length)];
            } else {
                pantsColor = colorOfSkin(skin);
            }
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            coatPath = randomCoat(allOvercoat);
            if (coatPath.includes("Jeans")) {
                color = ["black", "blue", "dark blue", "light blue"];
                coatColor = color[Math.floor(Math.random() * color.length)];
            } else {
                coatColor = colorOfSkin(skin);
            }
            clothsPath3 = typeClothPath + coatPath + coatColor;
            break;
        case "three_piece_B":
            shirtPath = randomShirtFemale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            skirtPath = randomSkirt(allSkirt, allBottomLength);
            skirtColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + skirtPath + skirtColor;
            coatPath = randomCoat(allOvercoat);
            if (coatPath.includes("Jeans")) {
                color = ["black", "blue", "dark blue", "light blue"];
                coatColor = color[Math.floor(Math.random() * color.length)];
            } else {
                coatColor = colorOfSkin(skin);
            }
            clothsPath3 = typeClothPath + coatPath + coatColor;
            break;
        default:
            break;
    }
}
function piceeOfClothsMale(allShirt, allPants, allSleeve, allBottomLength, allcollar, skin) {
    piece = ["two_piece_A", "three_piece_A"];
    pieceRandom = piece[Math.floor(Math.random() * piece.length)];
    switch (pieceRandom) {
        case "two_piece_A":
            //random shirt
            shirtPath = randomShirtMale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            //random pants
            pantsPath = randomPantsMale(allPants, allBottomLength);
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            break;
        case "three_piece_A":
            shirtPath = randomShirtMale(allSleeve, allShirt, allcollar);
            shirtColor = colorOfSkin(skin);
            clothsPath1 = typeClothPath + shirtPath + shirtColor;
            pantsPath = randomPantsMale(allPants, allBottomLength);
            pantsColor = colorOfSkin(skin);
            clothsPath2 = typeClothPath + pantsPath + pantsColor;
            coatPath = "overcoat/";
            coatColor = colorOfSkin(skin);
            clothsPath3 = typeClothPath + coatPath + coatColor;
            break;
        default:
            break;
    }
}
//--------------------------------------------------------------------------------

//----------------------------random picture1--------------------------------------
function displayImage1(folder) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", folder, true);
    xhr.responseType = "document";
    xhr.onload = function () {
        var images = xhr.responseXML.getElementsByTagName("a");
        var imageArray = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage1").src = randomImage;
    }; xhr.send();
}
//----------------------------random picture2--------------------------------------
function displayImage2(folder) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", folder, true);
    xhr.responseType = "document";

    xhr.onload = function () {
        var images = xhr.responseXML.getElementsByTagName("a");
        var imageArray = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage2").src = randomImage;
    }; xhr.send();
}
//----------------------------random picture--------------------------------------
function displayImage3(folder) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", folder, true);
    xhr.responseType = "document";

    xhr.onload = function () {
        var images = xhr.responseXML.getElementsByTagName("a");
        var imageArray = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i].href.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageArray.push(images[i].href);
            }
        }
        var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        document.getElementById("randomImage3").src = randomImage;
    }; xhr.send();
}

//function colorOfSkin will takes one parameter skin and returns a random color from an array based on the input skin color.
let color = [];
let colorRandom;
function colorOfSkin(skin) {
    switch (skin) {
        case "yellow":
            color = ["brown", "red", "orange", "yellow", "white", "pink", "black", "blue", "purple"];
            return color[Math.floor(Math.random() * color.length)];

        case "pink":
            color = ["brown", "red", "orange", "yellow", "white", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];

        case "twotone":
            color = ["brown", "white", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];

        case "tan":
            color = ["brown", "white", "pink", "black", "blue", "purple", "green", "grey"];
            return color[Math.floor(Math.random() * color.length)];
        default:
            break;
    }
}
var dresses;
function randomDresses(allDresses) {
    if (typeClothPath.includes("formal")) {
        allDresses = formalCloth(allDresses, "maxi");
        allDresses = formalCloth(allDresses, "mini");
        allDresses = formalCloth(allDresses, "tent");
        allDresses = formalCloth(allDresses, "shirt");
        dresses = sameVariable(allDresses);
    } else if (typeClothPath.includes("private")) {
        allDresses = formalCloth(allDresses, "peplum");
        allDresses = formalCloth(allDresses, "sheath");
        dresses = sameVariable(allDresses);
    } else {
        dresses = sameVariable(allDresses);
    }
    switch (dresses) {
        case "a-line":
            return "dress/a-line dress/";
        case "blouson":
            return "dress/blouson dress/";
        case "bodycon":
            return "dress/body con dress/";
        case "halterneck":
            return "dress/halterneck dress/";
        case "maxi":
            return "dress/maxi dress/";
        case "mini":
            return "dress/mini dress/";
        case "peplum":
            return "dress/peplum dress/";
        case "sheath":
            return "dress/sheath dress/";
        case "shift":
            return "dress/shift dress/";
        case "shirt":
            return "dress/shirt dress/";
        case "tent":
            return "dress/tent dress/";
        case "wrap":
            return "dress/wrap dress/";
        default:
            break;
    }
}

var sleeveRandom
function randomShirtFemale(allSleeve, allShirt, allcollar) {
    if (typeClothPath.includes("formal")) {
        sleeveRandom = sameVariable(formalCloth(allSleeve, "แขนกุด"));
        allShirt = formalCloth(allShirt, "ครอป");
        allShirt = formalCloth(allShirt, "รัดรูป");
        allShirt = formalCloth(allShirt, "เกาะอก");
        allcollar = formalCloth(allcollar, "เปิดไหล่");
    } else {
        sleeveRandom = sameVariable(allSleeve);
    }
    if (sleeveRandom != "แขนกุด") {
        allShirt = formalCloth(allShirt, "เกาะอก");
        allcollar = formalCloth(allcollar, "สายเดี่ยว");
    } else {
        allcollar = formalCloth(allcollar, "เปิดไหล่");
    }
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
                        default:
                            break;
                    }
                    break;
                case "เชิ้ต":
                    return "top/short-sleeved/shirt/";
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
                        default:
                            break;
                    }
                    break;
                case "เชิ้ต":
                    return "top/long-sleeved/shirt/";
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอเต่า":
                            return "top/long-sleeved/T-shirt/turtle neck/";
                        case "คอวี":
                            return "top/long-sleeved/T-shirt/V-neck/";
                        case "เปิดไหล่":
                            return "top/long-sleeved/T-shirt/off shoulder/";
                        case "คอกลม":
                            return "top/long-sleeved/T-shirt/round neck/";
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
                            return "top/sleeveless/camisole/";
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
                            return "top/sleeveless/camisole/";
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
var sleeveRandom
function randomShirtMale(allSleeve, allShirt, allcollar) {
    if (typeClothPath.includes("formal")) {
        sleeveRandom = sameVariable(formalCloth(allSleeve, "แขนกุด"));
    } else {
        sleeveRandom = sameVariable(allSleeve);
    }
    switch (sleeveRandom) {
        case "แขนสั้น":
            var shirtRandom = sameVariable(allShirt);
            switch (shirtRandom) {
                case "เชิ้ต":
                    return "top/short-sleeved/shirt/";
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอวี":
                            return "top/short-sleeved/T-shirt/V-neck/";
                        case "คอกลม":
                            return "top/short-sleeved/T-shirt/round neck/";
                        default:
                            break;
                    }
                default:
                    break;
            }
            break;
        case "แขนยาว":
            var shirtRandom = sameVariable(allShirt);
            switch (shirtRandom) {
                case "เชิ้ต":
                    return "top/short-sleeved/shirt/";
                case "ยืด":
                    var collarRandom = sameVariable(allcollar);
                    switch (collarRandom) {
                        case "คอวี":
                            return "top/long-sleeved/T-shirt/V-neck/";
                        case "คอกลม":
                            return "top/long-sleeved/T-shirt/round neck/";
                        default:
                            break;
                    }
                default:
                    break;
            }
            break;
        case "แขนกุด":
            return "top/sleeveless/";
        default:
            break;
    }
}
//---------------------------------------------------------------------------------
var pantsRandom;
function randomPantsFemale(allPants, allBottomLength) {
    if (typeClothPath.includes("formal") == true) {
        allBottomLength = ["ยาว", "ยาว"];
        allPants = formalCloth(allPants, "bermuda");
        allPants = formalCloth(allPants, "biker");
        allPants = formalCloth(allPants, "เอวสูง");
        pantsRandom = sameVariable(allPants);
    } else {
        pantsRandom = sameVariable(allPants);
    }
    switch (pantsRandom) {
        case "peg":
            return "pants/long/Peg top/"
        case "ขาบาน":
            return "pants/long/Wide Leg/"
        case "ยีนส์":
            var bottomLength = sameVariable(allBottomLength);
            console.log(bottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "pants/short/Jeans/"
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
        case "bermuda":
            return "pants/short/Bermuda shorts/"
        case "biker":
            return "pants/short/Biker shorts/"
        case "เอวสูง":
            return "pants/short/High-Waisted Shorts/"
        default:
            break;
    }
}
var bottomLength;
function randomPantsMale(allPants, allBottomLength) {
    if (typeClothPath.includes("formal")) {
        bottomLength = "ยาว";
        allPants = formalCloth(allPants, "Baggy");
    } else {
        bottomLength = sameVariable(allBottomLength);
    }
    switch (bottomLength) {
        case "สั้น":
            return "pants/short/"
        case "ยาว":
            let pantsRandom = sameVariable(allPants);
            switch (pantsRandom) {
                case "Baggy":
                    return "pants/long/Baggy/"
                case "Slim Fit":
                    return "pants/long/Slim Fit/"
                case "Straight":
                    return "pants/long/Straight/"
                default:
                    break;
            }
    }
}
//---------------------------------------------------------------------------------
var skirtramdom
function randomSkirt(allSkirt, allBottomLength) {
    if (typeClothPath.includes("formal")) {
        allBottomLength = formalCloth(allBottomLength, "สั้น")
        allSkirt = formalCloth(allSkirt, "ทรงเทนนิส")
        skirtramdom = sameVariable(allSkirt);
    } else {
        skirtramdom = sameVariable(allSkirt);
    }

    switch (skirtramdom) {
        case "ทรงเจ้าหญิง":
            var bottomLength = sameVariable(allBottomLength);
            switch (bottomLength) {
                case "สั้น":
                    return "skirt/long/Tulle Skirt/"
                case "ยาว":
                    return "skirt/long/Tulle Skirt/"
                default:
                    break;
            }
        case "ทรงพลีท":
            return "skirt/long/Pleated Skirt/"
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
            return "skirt/short/Tennis Skirt/"
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
        case "ครอบ-คาร์ดิแกน":
            return "overcoat/Cropped Cardigan/"
        case "แจ็คเก็ตยีนส์":
            return "overcoat/Jeans/"
        case "แจ็คเก็ตหนัง":
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
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
