export function formatGrams(grams, userLang) {
    if (grams < 1) {
        return Math.round(grams * 1000).toLocaleString(userLang) + " Milligramm";
    }
    if (grams > 1000) {
        return Math.round(grams / 1000).toLocaleString(userLang) + " Kilogramm";
    }
    return Math.round(grams).toLocaleString(userLang) + " Gramm";
}

export function formatMeter(meters, userLang) {
    if (meters > 1000) {
        return Math.round(meters / 1000).toLocaleString(userLang) + " Kilometer";
    }
    return Math.round(meters).toLocaleString(userLang) + " Meter";
}

export function formatDate(time) {
    var scope = "Stunden";
    if (time >= 24) {
        time = Math.floor(time / 24);
        scope = "Tage";
        if (time === 1) {
            return "einen Tag";
        }
    }
    if (time >= 31) {
        time = Math.floor(time / 31);
        scope = "Monate";
        if (time === 1) {
            return "einen Monat";
        }
    }
    if (time >= 12) {
        time = Math.floor(time / 12);
        scope = "Jahre";
        if (time === 1) {
            return "ein Jahr";
        }
    }
    time = Math.round(time);
    if (time === 1) {
        return "eine Stunde";
    }
    return time + " " + scope;
}

export function formatEnergy(energy) {
    var label = "kWh";
    if (energy > 10000) {
        label = "MWh";
        energy /= 1000;
    }
    return [energy, label];
}