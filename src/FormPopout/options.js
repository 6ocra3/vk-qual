const optionsTower = [{
    label: "A",
    value: "A"
},
{
    label: "B",
    value: "B"
}
]

const optionsFloors = []
for (let i = 3; i <= 27; i++) {
    optionsFloors.push({ label: i, value: i })
}

const optionsNumber = []
for (let i = 1; i <= 10; i++) {
    optionsNumber.push({ label: i, value: i })
}

export { optionsFloors, optionsTower, optionsNumber }
