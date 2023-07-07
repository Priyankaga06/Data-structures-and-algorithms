//add numbers 
//Loops for while do..while

function Add(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

console.log(Add(1, 10));

function printStars() {
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            console.log("*");
        }
    }
}

printStars();

//IN JAVA
public class Program {
    public void printStars(int num) {
        for (int i = 0; i < num; i++) {
            for (int j = 1; j <= num - i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public void printNumbers() {
        int counter = 1;
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(counter);
                counter++;
            }
            System.out.println();
        }
    }

    public void printStarsRight() {
        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j >= 1; j--) {
                if (j <= i) {
                    System.out.print("*");
                }
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public void printStarsPyramid(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = n - i; j > 1; j--)
            {
                System.out.print(" ");
            }
            for (int j = 0; j <= i; j++ )
            {
                System.out.print("* ");
            }
            System.out.println();
        }

    }


    public static void main(String[] args) {
        Program p = new Program();
        p.printStars(5);
        p.printNumbers();
        p.printStarsRight();
        p.printStarsPyramid(5);
    }
}

/**
Output

*****
****
***
**
*
1
23
456
78910
1112131415
    *
   **
  ***
 ****
*****

 */