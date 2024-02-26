from gpiozero import MCP3008

# Establish analog device from Port 0 of MCP3008
pot = MCP3008(0)

while True:
    # Print the digital value from the analog device
    print(pot.value)

