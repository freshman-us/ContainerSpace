const packages = {
    '6': { length: 23, width: 20, height: 14 },
    '12': { length: 17.909, width: 13.740, height: 4.880 },
    '24': { length: 17.900, width: 13.400, height: 9.299 },
    '48': { length: 17.500, width: 17.500, height: 13.500 },
    '12b': { length: 17, width: 13.85, height: 7.75 },
};

const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');

function calculate() {
    let totalCubicFeet = 0;

    for (const roll in packages) {
        const quantity = document.getElementById(`quantity${roll}`).value;
        const { length, width, height } = packages[roll];
        const cubicFeet = (length / 12) * (width / 12) * (height / 12) * quantity;
        document.getElementById(`result${roll}`).textContent = cubicFeet.toFixed(2);
        totalCubicFeet += cubicFeet;
    }

    document.getElementById('totalResult').textContent = totalCubicFeet.toFixed(2);
}

calculateBtn.addEventListener('click', calculate);

clearBtn.addEventListener('click', () => {
    for (const roll in packages) {
        document.getElementById(`quantity${roll}`).value = 0;
    }
    calculate();
});

// Initial calculation on page load
calculate();