function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        
    const PI = Math.PI
    const input = readLine()
    const squaredInput = Math.pow(input, 2)
    // Print the area of the circle:
    console.log(PI * squaredInput)
    
    // Print the perimeter of the circle:
    console.log(2*PI*input)