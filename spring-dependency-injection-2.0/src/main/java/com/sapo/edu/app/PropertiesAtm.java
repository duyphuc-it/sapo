package com.sapo.edu.app;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@PropertySource("classpath:application.yml")
@ConfigurationProperties(prefix = "atm-config")
public class PropertiesAtm {
    private BigDecimal moneyAtm;

    public BigDecimal getMoneyAtm() {
        return moneyAtm;
    }

    public void setMoneyAtm(BigDecimal moneyAtm) {
        this.moneyAtm = moneyAtm;
    }
}
