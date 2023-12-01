digitsSpelled = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10
}

with open("day1Data.txt") as file:
    result = 0
    for line in file:
        digits = []

        for pos in range(len(line)):
            if line[pos].isdigit():
                digit = int(line[pos])
                digits.append(digit)

        result += digits[0] * 10 + digits[-1]

print(f"Part 1: {result}")