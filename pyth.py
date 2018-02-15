from time import sleep
import sys, json

def main():
    i = 0
    while True:
        print(i)
        i += 1
        sys.stdout.flush()
        sleep(0.02)

# Start process
if __name__ == '__main__':
    main()