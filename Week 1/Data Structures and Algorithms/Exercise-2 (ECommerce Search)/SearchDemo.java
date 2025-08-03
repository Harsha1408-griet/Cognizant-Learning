import java.util.Arrays;

public class SearchDemo {

    static Product linearSearch(Product[] data, String targetName) {
        for (Product p : data)
            if (p.getProductName().equalsIgnoreCase(targetName))
                return p;
        return null;
    }

    static Product binarySearch(Product[] sorted, String targetName) {
        int lo = 0, hi = sorted.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) >>> 1;
            int cmp = sorted[mid].getProductName().compareToIgnoreCase(targetName);
            if (cmp == 0) return sorted[mid];
            else if (cmp < 0) lo = mid + 1;
            else hi = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Plate", "Kitchen"),
            new Product(102, "Spoon", "Kitchen"),
            new Product(103, "Camera", "Electronics"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Laptop", "Electronics")
        };

        Product[] byName = products.clone();
        Arrays.sort(byName, (a, b) -> a.getProductName().compareToIgnoreCase(b.getProductName()));

        System.out.println(linearSearch(products, "Camera"));
        System.out.println(binarySearch(byName, "Camera"));
    }
}
