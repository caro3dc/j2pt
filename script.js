function upVar(vary, newvalue) {
    var newvar = "--" + vary;
    document.body.style.setProperty(newvar, newvalue);
    console.log("vary: " + vary);
    console.log("new: " + newvalue);
}
var i = 0;
$(document).ready(function () {
    $("#num").html(i);
    $(document).on('click', function () {
        i++; $("#num").html(i);
        var mod = i % 29;
        console.log(mod);
        switch (mod) {
            case 0:
                upVar("bg", "#F8F4F1"); upVar("tc", "#0E0E25"); upVar("ac", "#505dc0"); upVar("la", "#F2B4C3"); upVar("da", "#363575"); break;
            case 1:
                upVar("bg", "#FEF2F2"); upVar("tc", "#450A0A"); upVar("ac", "#DC2626"); upVar("la", "#FECACA"); upVar("da", "#991B1B"); break;
            case 2:
                upVar("bg", "#FFF7ED"); upVar("tc", "#431407"); upVar("ac", "#EA580C"); upVar("la", "#FED7AA"); upVar("da", "#9A3412"); break;
            case 3:
                upVar("bg", "#FEFCE8"); upVar("tc", "#422006"); upVar("ac", "#CA8A04"); upVar("la", "#FEF08A"); upVar("da", "#854D0E"); break;
            case 4:
                upVar("bg", "#F7FEE7"); upVar("tc", "#1A2E05"); upVar("ac", "#65A30D"); upVar("la", "#D9F99D"); upVar("da", "#3F6212"); break;
            case 5:
                upVar("bg", "#F0FDF4"); upVar("tc", "#052E16"); upVar("ac", "#16A34A"); upVar("la", "#BBF7D0"); upVar("da", "#166534"); break;
            case 6:
                upVar("bg", "#ECFDF5"); upVar("tc", "#022C22"); upVar("ac", "#059669"); upVar("la", "#6EE7B7"); upVar("da", "#065F46"); break;
            case 7:
                upVar("bg", "#F0FDFA"); upVar("tc", "#042F2E"); upVar("ac", "#0D9488"); upVar("la", "#99F6E4"); upVar("da", "#115E59"); break;
            case 8:
                upVar("bg", "#F0F9FF"); upVar("tc", "#082F49"); upVar("ac", "#0284C7"); upVar("la", "#BAE6FD"); upVar("da", "#075985"); break;
            case 9:
                upVar("bg", "#EFF6FF"); upVar("tc", "#172554"); upVar("ac", "#2563EB"); upVar("la", "#BFDBFE"); upVar("da", "#1E40AF"); break;
            case 10:
                upVar("bg", "#EEF2FF"); upVar("tc", "#1E1B4B"); upVar("ac", "#4F46E5"); upVar("la", "#C7D2FE"); upVar("da", "#3730A3"); break;
            case 11:
                upVar("bg", "#FAF5FF"); upVar("tc", "#3B0764"); upVar("ac", "#9333EA"); upVar("la", "#E9D5FF"); upVar("da", "#6B21A8"); break;
            case 12:
                upVar("bg", "#FDF4FF"); upVar("tc", "#4A044E"); upVar("ac", "#C026D3"); upVar("la", "#F5D0FE"); upVar("da", "#86198F"); break;
            case 13:
                upVar("bg", "#FDF2F8"); upVar("tc", "#500724"); upVar("ac", "#DB2777"); upVar("la", "#FBCFE8"); upVar("da", "#9D174D"); break;
            case 14:
                upVar("bg", "#FFF1F2"); upVar("tc", "#4C0519"); upVar("ac", "#E11D48"); upVar("la", "#FDA4AF"); upVar("da", "#9F1239"); break;
            case 15:
                upVar("bg", "#F8FAFC"); upVar("tc", "#020617"); upVar("ac", "#475569"); upVar("la", "#CBD5E1"); upVar("da", "#1E293B"); break;
            case 16:
                upVar("bg", "#EFEBE9"); upVar("tc", "#3E2723"); upVar("ac", "#795548"); upVar("la", "#CCB7B0"); upVar("da", "#4E342E"); break;
            case 17:
                upVar("bg", "#FAFAFA"); upVar("tc", "#0A0A0A"); upVar("ac", "#525252"); upVar("la", "#D4D4D4"); upVar("da", "#262626"); break;
            case 18:
                upVar("bg", "#f8ece1"); upVar("tc", "#353542"); upVar("ac", "#355eb4"); upVar("la", "#eac879"); upVar("da", "#7f1e33"); break;
            case 19:
                upVar("bg", "#EFEBE9"); upVar("tc", "#17312B"); upVar("ac", "#478D6A"); upVar("la", "#BFD5B7"); upVar("da", "#225443"); break;
            case 20:
                upVar("bg", "#272736"); upVar("tc", "#f8ece1"); upVar("ac", "#a9a8ee"); upVar("la", "#484764"); upVar("da", "#C8BCA1"); break;
            case 21:
                upVar("bg", "#1E1E2A"); upVar("tc", "#F7EFE7"); upVar("ac", "#6873CB"); upVar("la", "#363575"); upVar("da", "#EC94A7"); break;
            case 22:
                upVar("bg", "#FCFCF8"); upVar("tc", "#19130D"); upVar("ac", "#6A6459"); upVar("la", "#E1DDD8"); upVar("da", "#352E28"); break;
            case 23:
                upVar("bg", "#FDFDFD"); upVar("tc", "#00074E"); upVar("ac", "#CA8D3C"); upVar("la", "#F5DE80"); upVar("da", "#09398B"); break;
            case 24:
                upVar("bg", "#191724"); upVar("tc", "#e0def4"); upVar("ac", "#9ccfd8"); upVar("la", "#403d52"); upVar("da", "#ebbcba"); break;
            case 25:
                upVar("bg", "#232136"); upVar("tc", "#e0def4"); upVar("ac", "#9ccfd8"); upVar("la", "#44415a"); upVar("da", "#ea9a97"); break;
            case 26:
                upVar("bg", "#faf4ed"); upVar("tc", "#232136"); upVar("ac", "#d7827e"); upVar("la", "#ebbcba"); upVar("da", "#286983"); break;
            case 27:
                upVar("bg", "#F5FAED"); upVar("tc", "#11572C"); upVar("ac", "#D17F14"); upVar("la", "#F0D854"); upVar("da", "#4B8624"); break;
            case 28:
                upVar("bg", "#F6F8F1"); upVar("tc", "#0E0E25"); upVar("ac", "#505dc0"); upVar("la", "#B4F2B9"); upVar("da", "#363575")
        }

        switch (i) {
            case 30: $("h1").html("Lovely, lovely"); break;
case 31: $("h1").html("In your jeans, frenzy"); break;
case 32: $("h1").html("Another movie that I didn't watch with you"); break;
case 33: $("h1").html("Another movie and I'm gonna have to move"); break;
case 34: $("h1").html("That final terror is in your house somewhere"); break;
case 35: $("h1").html("Hiding in boxes, behind closed doorways"); break;
case 36: $("h1").html("Out from the forest adjacent to your garage"); break;
case 37: $("h1").html("I've seen its marks at the corner of your eyes"); break;
case 38: $("h1").html("Nothing works"); break;
case 39: $("h1").html("Nothing works for everyone"); break;
case 40: $("h1").html("Good stories are bad lives"); break;
case 41: $("h1").html("Good stories are bad lives"); break;
case 42: $("h1").html("Take your hands off your neck and hold"); break;
case 43: $("h1").html("On to the ghost of my body"); break;
case 44: $("h1").html("You know that good lives make bad stories"); break;
case 45: $("h1").html("You can text me"); break;
case 46: $("h1").html("When punching mattresses gets old"); break;
case 47: $("h1").html("Don't think it'll always be this way"); break;
case 48: $("h1").html("Not comforted by anything I say"); break;
case 49: $("h1").html("We were wrecks before we crashed into each other"); break;
case 50: $("h1").html("Such a good idea"); break;
case 51: $("h1").html("If it turns you on"); break;
case 52: $("h1").html("We have breakdowns"); break;
case 53: $("h1").html("And sometimes we don't have breakdowns"); break;
case 54: $("h1").html("I want to hear you going psycho"); break;
case 55: $("h1").html("If you're going psycho, I wanna hear"); break;
case 56: $("h1").html("Every conversation just ends with you screaming"); break;
case 57: $("h1").html("Not even words, just ahh-ahh-ahh"); break;
case 58: $("h1").html("Take your hands off your neck and hold"); break;
case 59: $("h1").html("On to the ghost of my body"); break;
case 60: $("h1").html("You know that good lives make bad stories"); break;
case 61: $("h1").html("You can text me"); break;
case 62: $("h1").html("When punching mattresses gets old"); break;
case 63: $("h1").html("What if it'll always be this way?"); break;
case 64: $("h1").html("Not comforted by anything you say"); break;
case 65: $("h1").html("We were wrecks before we crashed into each other"); break;
case 66: $("h1").html("Don't worry"); break;
case 67: $("h1").html("You and me won't be alone no more"); break;
case 68: $("h1").html("Don't worry"); break;
case 69: $("h1").html("You and me won't be alone no more"); break;
case 70: $("h1").html("Don't worry"); break;
case 71: $("h1").html("You and me won't be alone no more"); break;
case 72: $("h1").html("Don't worry"); break;
case 73: $("h1").html("You and me won't be alone no more"); break;
case 74: $("h1").html("Don't worry"); break;
case 75: $("h1").html("You and me won't be alone no more"); break;
case 76: $("h1").html("Don't worry"); break;
case 77: $("h1").html("You and me won't be alone no more"); break;
case 78: $("h1").html("Don't worry"); break;
case 79: $("h1").html("You and me won't be alone no more"); break;
case 80: $("h1").html("Don't worry"); break;
case 81: $("h1").html("You and me won't be alone no more"); break;
case 82: $("h1").html("Don't worry"); break;
case 83: $("h1").html("You and me won't be alone no more"); break;
case 84: $("h1").html("Don't worry"); break;
case 85: $("h1").html("You and me won't be alone no more"); break;
case 86: $("h1").html("Don't worry"); break;
case 87: $("h1").html("You and me won't be alone no more"); break;
case 88: $("h1").html("Don't worry"); break;
case 89: $("h1").html("You and me won't be alone no more"); break;
default: $("h1").html("Romeo's Javascript Snippets"); break;
        }

    })

})



