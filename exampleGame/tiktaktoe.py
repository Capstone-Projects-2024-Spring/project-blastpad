import pgzrun
import time

WIDTH, HEIGHT = 300, 300
board = [[' ', ' ', ' '], 
         [' ', ' ', ' '], 
         [' ', ' ', ' ']]
current_player, game_over, winner = 'X', False, None
restart_message_timer = None

def draw():
    screen.fill((255, 255, 255))
    draw_grid()
    draw_pieces()
    draw_winner()
    draw_draw()
    draw_restart_message()

def draw_grid():
    for i in range(1, 3):
        screen.draw.line((i * WIDTH // 3, 0), (i * WIDTH // 3, HEIGHT), (0, 0, 0))
        screen.draw.line((0, i * HEIGHT // 3), (WIDTH, i * HEIGHT // 3), (0, 0, 0))

def draw_pieces():
    for row in range(3):
        for col in range(3):
            if board[row][col] == 'X':
                draw_cross(row, col)
            elif board[row][col] == 'O':
                draw_circle(row, col)

def draw_cross(row, col):
    x_pos, y_pos = col * WIDTH // 3 + WIDTH // 6, row * HEIGHT // 3 + HEIGHT // 6
    screen.draw.line((x_pos - 40, y_pos - 40), (x_pos + 40, y_pos + 40), (0, 0, 0))
    screen.draw.line((x_pos + 40, y_pos - 40), (x_pos - 40, y_pos + 40), (0, 0, 0))

def draw_circle(row, col):
    x_pos, y_pos = col * WIDTH // 3 + WIDTH // 6, row * HEIGHT // 3 + HEIGHT // 6
    screen.draw.circle((x_pos, y_pos), 40, (0, 0, 0))

def draw_winner():
    if game_over and winner:
        winner_label = f"Player {winner} wins!"
        screen.draw.text(winner_label, midtop=(WIDTH // 2, 10), color=(0, 0, 0))

def draw_draw():
    if game_over and winner is None:
        draw_label = "It's a draw!"
        screen.draw.text(draw_label, midtop=(WIDTH // 2, 10), color=(0, 0, 0))

def draw_restart_message():
    global restart_message_timer
    if restart_message_timer is not None and time.time() - restart_message_timer < 3:
        restart_msg = "Press 'R' to restart"
        screen.draw.text(restart_msg, midbottom=(WIDTH // 2, HEIGHT - 10), color=(0, 0, 0))
    elif restart_message_timer is not None:
        restart_message_timer = None

def on_mouse_down(pos):
    global current_player, game_over, winner, restart_message_timer
    col, row = pos[0] // (WIDTH // 3), pos[1] // (HEIGHT // 3)

    if board[row][col] == ' ' and not game_over:
        board[row][col] = current_player

        if check_winner():
            winner, game_over = current_player, True
            restart_message_timer = time.time()  # Set the timer here
        elif check_draw():
            game_over = True
            restart_message_timer = time.time()  # Set the timer here

        current_player = 'O' if current_player == 'X' else 'X'
        draw()

        if restart_message_timer is not None and time.time() - restart_message_timer >= 3:
            restart_message_timer = None

def on_key_down(key):
    if key == keys.R and game_over:
        reset_game()

def check_winner():
    for i in range(3):
        if check_line(board[i][0], board[i][1], board[i][2]) or \
           check_line(board[0][i], board[1][i], board[2][i]):
            return True

    if check_line(board[0][0], board[1][1], board[2][2]) or \
       check_line(board[0][2], board[1][1], board[2][0]):
        return True

    return False

def check_line(cell1, cell2, cell3):
    return cell1 == cell2 == cell3 != ' '

def check_draw():
    return all(cell != ' ' for row in board for cell in row)

def reset_game():
    global board, current_player, game_over, winner, restart_message_timer
    board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
    current_player, game_over, winner = 'X', False, None
    restart_message_timer = None
    draw()

pgzrun.go()