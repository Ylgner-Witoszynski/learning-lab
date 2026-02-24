def eh_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False 
    return True 

# Teste
num = 17
print(f"{num} é primo? {eh_primo(num)}")
