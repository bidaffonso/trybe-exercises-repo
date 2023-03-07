class Ventilador:
    def __init__(self, price):
        self.preco = price
        self.velocidade_maxima = 4
        self.velocidade = 0
        self.ligado = False

    def ligar_ventilador(self, velocidade):
        if velocidade > self.velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.velocidade_maxima}"
            )
        self.velocidade = velocidade
        self.ligado = True

    def desligar_ventilador(self):
        self.velocidade = 0
        self.ligado = False

    def __str__(self):
        return f"""
        Velocidade: {self.velocidade}
        Ligado: {self.ligado}
        """

class Pessoa:
    def __init__(self, nome, carteira):
        self.nome = nome
        self.carteira = carteira
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if self.carteira >= ventilador.preco:
            self.carteira -= ventilador.preco
            self.ventilador = ventilador
    
    def __str__(self):
        return f"""
        Nome: {self.nome}
        Carteira: {self.carteira}
        Possui ventilador: {self.ventilador}
        """

pessoa = Pessoa("Bruno", 1000)
ventilador_de_pe = Ventilador(300)
pessoa.comprar_ventilador(ventilador_de_pe)
ventilador_de_pe.ligar_ventilador(2)
print(pessoa)
ventilador_de_pe.desligar_ventilador()
print(ventilador_de_pe)

