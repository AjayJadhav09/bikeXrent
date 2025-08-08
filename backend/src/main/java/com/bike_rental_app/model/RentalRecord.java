package com.bike_rental_app.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "rentalrecords")
public class RentalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rentalRecordId;

//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bike_id", referencedColumnName = "bikeId")
    private Bike bike;

    private LocalDate rentalStartDate;

    private LocalDate rentalEndDate;

    private LocalDate bookingDate;

    private boolean extraHelmet;

    private boolean paymentConfirmation;

    // Getters and Setters
    
    

    public Long getRentalRecordId() {
        return rentalRecordId;
    }

    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setRentalRecordId(Long rentalRecordId) {
        this.rentalRecordId = rentalRecordId;
    }

   

    public Bike getBike() {
        return bike;
    }

    public void setBike(Bike bike) {
        this.bike = bike;
    }

    public LocalDate getRentalStartDate() {
        return rentalStartDate;
    }

    public void setRentalStartDate(LocalDate rentalStartDate) {
        this.rentalStartDate = rentalStartDate;
    }

    public LocalDate getRentalEndDate() {
        return rentalEndDate;
    }

    public void setRentalEndDate(LocalDate rentalEndDate) {
        this.rentalEndDate = rentalEndDate;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public boolean isExtraHelmet() {
        return extraHelmet;
    }

    public void setExtraHelmet(boolean extraHelmet) {
        this.extraHelmet = extraHelmet;
    }

    public boolean isPaymentConfirmation() {
        return paymentConfirmation;
    }

    public void setPaymentConfirmation(boolean paymentConfirmation) {
        this.paymentConfirmation = paymentConfirmation;
    }

	public RentalRecord() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RentalRecord(Long rentalRecordId, User user, Bike bike, LocalDate rentalStartDate, LocalDate rentalEndDate,
			LocalDate bookingDate, boolean extraHelmet, boolean paymentConfirmation) {
		super();
		this.rentalRecordId = rentalRecordId;
		this.user = user;
		this.bike = bike;
		this.rentalStartDate = rentalStartDate;
		this.rentalEndDate = rentalEndDate;
		this.bookingDate = bookingDate;
		this.extraHelmet = extraHelmet;
		this.paymentConfirmation = paymentConfirmation;
	}
    
}
