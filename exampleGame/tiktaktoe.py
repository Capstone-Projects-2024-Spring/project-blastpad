

import pgzrun

WIDTH = 300
HEIGHT = 300
board = [[' ', ' ', ' '], [' ', ' ', ' '] , [' ', ' ', ' '] ]
current_player = 'X'
game_over = False

def draw():
    screen.fill((255, 255, 255))
    draw_board()
    draw_state()

def draw_board():
      for i in range(1, 3):
        screen.draw.line((i * WIDTH // 3, 0), (i * WIDTH // 3, HEIGHT), (0, 0, 0))
        screen.draw.line((0, i * HEIGHT // 3), (WIDTH, i * HEIGHT // 3), (0, 0, 0))

def draw_state():
    for row in range(3):
        for col in range(3):
            if board[row][col] == 'X':
                draw_x(row, col)
            elif board[row][col] == 'O':
                draw_o(row, col)

def draw_x(row, col):
    x_pos = col * WIDTH // 3 + WIDTH // 6
    y_pos = row * HEIGHT // 3 + HEIGHT // 6
    screen.draw.line((x_pos - 40, y_pos - 40), (x_pos + 40, y_pos + 40), (0, 0, 0))
    screen.draw.line((x_pos + 40, y_pos - 40), (x_pos - 40, y_pos + 40), (0, 0, 0))

def draw_o(row, col):
     x_pos = col * WIDTH // 3 + WIDTH // 6
     y_pos = row * HEIGHT // 3 + HEIGHT // 6
     screen.draw.circle((x_pos, y_pos), 40, (0, 0, 0))

def drawWinner():
    if game_over and winner:
        winnerLabel = f"Player {winner} wins"
        screen.draw.text(winnerLabel, midtop=(WIDTH // 2, 10), color=(0,0,0))
        

#user clicking to place x or o
def on_mouse_down(pos):
    global current_player, game_over
    col = pos[0] // (WIDTH // 3)
    row = pos[1] // (HEIGHT // 3)


        
    if board[row][col] == ' ' and not game_over:
        board[row][col] = current_player

        if check_winner():
            print(f"Player {current_player} wins!")
            game_over = True
        elif is_board_full():
            print("It's a tie!")
            game_over = True
        else:
            current_player = 'O' if current_player == 'X' else 'X'
        
        draw()
def check_winner():
    for i in range(3):
        #check in rows and columns
        if board[i][0] == board[i][1] == board[i][2] != ' ' or \
           board[0][i] == board[1][i] == board[2][i] != ' ':
            return True
    #check diagnals
    if board[0][0] == board[1][1] == board[2][2] != ' ' or \
       board[0][2] == board[1][1] == board[2][0] != ' ':
        return True

    return False

def is_board_full():
      return all(cell != ' ' for row in board for cell in row)



pgzrun.go()


