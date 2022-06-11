/* Core */
type Status = any;

interface Rule {
    status?: Status;
    message: string;
}

interface Validator {
    required?: Rule;
    length?: Rule;
    minLength?: Rule;
    maxLength?: Rule;
    between?: Rule;
    email?: Rule;
    regex?: Rule;
    numeric?: Rule;
    positive?: Rule;
}

const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateNumericString = (value: string) => {
    const re = /^-?\d*(\.\d+)?$/;
    return re.test(value);
}

const validator = (value: string, rules: Validator) => {
    const { required, length, minLength, maxLength, between, email, regex, numeric, positive } = rules;

    if (required && !value) {
        return required.message;
    }

    if (length && value.length !== length.status) {
        return length.message;
    }

    if (minLength && value.length < minLength.status) {
        return minLength.message;
    }

    if (maxLength && value.length > maxLength.status) {
        return maxLength.message;
    }

    if (between && (value.length < between.status[0] || value.length > between.status[1])) {
        return between.message;
    }

    if (email && !validateEmail(value)) {
        return email.message;
    }

    if (regex) {
        const re = regex.status;
        return !re.test(value) && rules.regex.message;
    }

    if (numeric && !validateNumericString(value)) {
        return numeric.message;
    }

    if (positive && Number(value) < 0 || value[0] === '0') {
        return positive.message;
    }

}

/* Rules */
export const fullNameRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Imię i nazwisko jest wymagane.'
        },
        between: {
            status: [5, 50],
            message: 'Imię i nazwisko musi mieć od 5 do 50 znaków.'
        }
    });
}

export const emailRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Adres e-mail jest wymagany.'
        },
        email: {
            status: true,
            message: 'Podaj poprawny adres e-mail.'
        }
    });
}

export const nickRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Nick jest wymagany.'
        },
        between: {
            status: [3, 30],
            message: 'Nick musi mieć od 3 do 30 znaków.'
        },
        regex: {
            status: /^[a-z0-9_]+$/,
            message: 'Nick może zawierać jedynie małe litery - bez polskich znaków, cyfry i podkreślenia.'
        }
    });
}

export const passwordRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Hasło jest wymagane.'
        },
        between: {
            status: [8, 16],
            message: 'Hasło musi mieć od 8 do 16 znaków.'
        }
    });
}

export const loginPasswordRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Hasło jest wymagane.'
        }
    });
}

export const bioRules = (value: string) => {
    return validator(value, {
        maxLength: {
            status: 255,
            message: 'Opis nie może być dłuższy niż 255 znaków.'
        }
    });
}

export const challengeTitleRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Tytuł jest wymagany.'
        },
        maxLength: {
            status: 255,
            message: 'Tytuł nie może być dłuższy niż 255 znaków'
        }
    });
}

export const challengePriceRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj cenę wyzwania.'
        },
        numeric: {
            status: true,
            message: 'Cena musi być liczbą.'
        }
    });
}

export const purchaserNameRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj swoje imię.'
        },
        maxLength: {
            status: 50,
            message: 'Twoję imię jest za długie.'
        }
    });
}

export const orderInstructionsRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Instrukcja jest wymagana.'
        },
        maxLength: {
            status: 500,
            message: 'Maksymalna długość instrukcji to 500 znaków.'
        }
    });
}

export const offerTitleRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj tytuł oferty.'
        },
        maxLength: {
            status: 30,
            message: 'Tytuł nie może być dłuższy niż 30 znaków.'
        }
    });
}

export const offerPriceRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj cene.'
        },
        numeric: {
            status: true,
            message: 'Cena musi być liczbą.'
        },
        positive: {
            status: true,
            message: 'Cena musi być liczbą dodatnią.'
        }
    });
}

export const offerDescriptionRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Napisz opis.'
        },
    });
}

export const instagramLinkRules = (value: string) => {
    return validator(value, {
        required: {
            status: false,
            message: ''
        },
        regex: {
            status: /^(https:\/\/www\.instagram\.com)\/.+$/,
            message: 'Ten link jest niepoprawny.'
        }
    });
}

export const tiktokLinkRules = (value: string) => {
    return validator(value, {
        required: {
            status: false,
            message: ''
        },
        regex: {
            status: /^(https:\/\/www\.tiktok\.com)\/@.+$/,
            message: 'Ten link jest niepoprawny.'
        }
    });
}

export const youtubeLinkRules = (value: string) => {
    return validator(value, {
        required: {
            status: false,
            message: ''
        },
        regex: {
            status: /^https:\/\/www\.(youtube\.com)\/.+\/.+$/,
            message: 'Ten link jest niepoprawny.'
        }
    });
}

export const bankAccountNumberRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj numer swojego konta bankowego.'
        },
        length: {
            status: 26,
            message: 'Numer konta musi mieć 26 znaków.'
        },
        numeric: {
            status: true,
            message: 'Numer konta może składać się tylko z cyfr.'
        },
    });
}

export const bankAccountHolderNameRules = (value: string) => {
    return validator(value, {
        required: {
            status: true,
            message: 'Podaj nazwę właściciela rachunku bankowego, taką jak na wyciągu z konta.'
        },
        maxLength: {
            status: 70,
            message: 'Nazwa nie może być dłuższa niż 70 znaków.'
        }
    })
}