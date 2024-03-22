import pygame

class Player(pygame.sprite.Sprite):
    def __init__(self):
        super(Player, self).__init__()
        self.surf = pygame.Surface((25, 25))
        self.surf.fill((255, 0, 0))
        self.rect = self.surf.get_rect()
    def move_left(self, amount):
        self.rect.move_ip(-amount, 0)
    def move_right(self, amount):
        self.rect.move_ip(amount, 0)
    def move_down(self, amount):
        self.rect.move_ip(0, amount)
    def move_up(self, amount):
        self.rect.move_ip(0, -amount)