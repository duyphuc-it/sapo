package com.sapo.edu.app;

import org.springframework.stereotype.Component;

@Component
public interface Printer {
    void printCustomer(Customer customer);

    void printMessage(String message);
}
