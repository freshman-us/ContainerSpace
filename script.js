const packages = {
    '12': { length: 17.909, width: 13.740, height: 4.880 },
    '24': { length: 17.900, width: 13.400, height: 9.299 },
    '48': { length: 17.500, width: 17.500, height: 13.500 },
};

const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    let totalCubicFeet = 0;

    for (const roll in packages) {
        const quantity = document.getElementById(`quantity${roll}`).value;
        const { length, width, height } = packages[roll];
        const cubicFeet = (length / 12) * (width / 12) * (height / 12) * quantity;
        document.getElementById(`result${roll}`).textContent = cubicFeet.toFixed(2);
        totalCubicFeet += cubicFeet;
    }

    document.getElementById('totalResult').textContent = totalCubicFeet.toFixed(2);
});
