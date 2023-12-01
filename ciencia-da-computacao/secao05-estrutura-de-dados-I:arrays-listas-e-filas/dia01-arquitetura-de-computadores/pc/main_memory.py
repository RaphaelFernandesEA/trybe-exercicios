class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if index is None or index != int:
            return 0
        else:
            self.loaded_memory[index]

    def clean(self):
        self.loaded_memory = []
