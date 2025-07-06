package com.library.repository;

public class BookRepository {
    public String getBookInfo(String isbn) {
        // In a real application, this would query a database
        return "Book details for ISBN: " + isbn;
    }
}