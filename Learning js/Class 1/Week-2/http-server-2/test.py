def calculate(s: str) -> int:
    stack = []
    current_number = 0
    operation = '+'  
    for i, c in enumerate(s):
        if c.isdigit():
            current_number = current_number * 10 + int(c)
        
        
        if c in "+-*/" or i == len(s) - 1:
            if operation == '+':
                stack.append(current_number)
            elif operation == '-':
                stack.append(-current_number)
            elif operation == '*':
                stack[-1] = stack[-1] * current_number
            elif operation == '/':
                stack[-1] = int(stack[-1] / current_number)  
            
            operation = c
            current_number = 0

    return sum(stack)


s = "14-3/2"
print(calculate(s))