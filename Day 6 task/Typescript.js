public class PointsOnACircleV1
 {
  public static void main (String [] args)
{
    double r = 1; 
    double x = 1; 
    double y = 0.0; 

    
    System.out.println("\tPoints on a Circle of Radius 1.0"); 
    System.out.printf("\t%6s%6s%12s%7s\n", "x1", "y1", "x1", "y2");
    System.out.println("---");

    for(x = 1; x >= -1; x -= .1)
    {
        y = Math.sqrt(Math.pow(r,2) - Math.pow(x,2)); 
        System.out.printf("\t%6.2f%7.2f%12.2f%8.2f\n", x, y, x, -y); 
    }
}
};
//output, -y to get values
//for the other 1/2 of the circle