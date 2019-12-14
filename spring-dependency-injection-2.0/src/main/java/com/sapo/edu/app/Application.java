package com.sapo.edu.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Scanner;

@EnableConfigurationProperties
@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    @Qualifier("bidvAtm")
    Atm atm;

    @Autowired
    @Qualifier("printerFile")
    Printer printer;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        atm.setPrinter(printer);
        Customer customer = new Customer();
        Scanner scanner = new Scanner(System.in);
        BigDecimal withDrawAmount;
        BigDecimal depositAmount;

        atm.printCurrentMoney();

        System.out.println("1.Khởi tạo acc.");
        customer.init();
        atm.displayCustomerInfo(customer);

        System.out.println("2. Rút tiền.");
        System.out.print("Số tiền: ");
        withDrawAmount = scanner.nextBigDecimal();
        atm.withDraw(customer, withDrawAmount);


        System.out.println("3. Gửi tiền.");
        System.out.print("Số tiền gửi: ");
        depositAmount = scanner.nextBigDecimal();
        atm.deposit(customer, depositAmount);

        atm.printCurrentMoney();
    }

}
