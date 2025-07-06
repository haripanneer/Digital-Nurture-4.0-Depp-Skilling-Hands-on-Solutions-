package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class MainApp {
    public static void main(String[] args) {
        try {
          
            ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
         
            BookService bookService = context.getBean("bookService", BookService.class);

            System.out.println("--- Testing Dependency Injection ---");
            String bookInfo = bookService.getBookDetails("123-4567890");
            System.out.println(bookInfo);
            
            int totalBooks = bookService.getTotalBooks();
            System.out.println("Total books in library: " + totalBooks);
      
            ((ClassPathXmlApplicationContext) context).close();
        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
            e.printStackTrace();
        }
    }
}