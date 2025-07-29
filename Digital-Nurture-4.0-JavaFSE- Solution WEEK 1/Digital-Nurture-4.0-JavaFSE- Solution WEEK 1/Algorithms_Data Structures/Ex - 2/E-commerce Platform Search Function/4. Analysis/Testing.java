public class Testing {
     public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Smartphone", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(4, "Watch", "Fashion")
        };

        Product result1 = linearSearch(products, "Smartphone");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        Product result2 = binarySearch(products, "Smartphone");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }

     private static Product binarySearch(Product[] products, String string) {
        throw new UnsupportedOperationException("Unimplemented method 'binarySearch'");
    }

     private static Product linearSearch(Product[] products, String string) {     
        throw new UnsupportedOperationException("Unimplemented method 'linearSearch'");
     }
}



/*            Time Complexity Comparison:
Linear Search:

Time Complexity: 

𝑂(𝑛)
O(n).

Space Complexity: 

𝑂(1)
O(1).

Suitable for small datasets or unsorted arrays.

Binary Search:

Time Complexity: 

𝑂(log 𝑛)
O(logn).

Space Complexity: 

𝑂(1)
O(1) (Iterative version).

Requires sorted data, suitable for large datasets.

Suitability:

For platforms with frequent searches: Binary search is more efficient.

For platforms with frequent additions/updates: Use linear search or a data structure like a hash map for 

𝑂(1)
O(1) lookup.  


Binary Search is more suitable for an e-commerce platform due to the following reasons:

Fast Search Operations: With a sorted product catalog, binary search ensures that users experience minimal delay in retrieving search results, improving the overall user experience.

Scalability: As the platform grows and the product database expands, the logarithmic time complexity ensures the platform remains responsive.

Optimized for Structured Data: E-commerce platforms often organize data into categories and sort by attributes like product name, price, or popularity, aligning well with binary search requirements.

In conclusion, binary search offers a superior long-term solution for an e-commerce platform, ensuring both performance and scalability.


*/ 