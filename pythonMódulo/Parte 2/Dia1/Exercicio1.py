class tv:
    def __init__(self, tamanho,):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
    
    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
    
    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError (f"O canal deve estar entre 1 e 99")
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
        Volume: {self.__volume}
        Canal: {self.__canal}
        Tamanho: {self.__tamanho}
        Ligada: {self.__ligada}
        """

tv_da_sala = tv("32 polegadas")
tv_da_sala.aumentar_volume()
tv_da_sala.aumentar_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala)
tv_da_sala.modificar_canal(15)
print(tv_da_sala)
tv_da_sala.ligar_desligar()
print(tv_da_sala)