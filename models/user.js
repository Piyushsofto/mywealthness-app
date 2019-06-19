'use strict';

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isMarried: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        spousefirstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        spouseLastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        spouseDOB: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        haveChildren: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        numberOfChildren: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        householdEarnings: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        charity: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        charityDone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interestInCharity: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        idealVacation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        noWork: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        futureScope: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        readingBooks: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        typeOfBooks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        SportsLove: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        SportsTeam: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        InterestMovies: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        typeOfMovies: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        exercise: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        exerciseType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        assets: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        healthConcern: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        leaveFunds: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isIntrovert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        riskTolerance: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        skyDiving: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        iphone: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        investmentRiskLevel: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        estatePlanning: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        investmentArea: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountTypes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        lifeInsurance: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        insuranceAmount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        personalResidence: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        residanceValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        realEstateInvestment: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        realEstateValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        socialSecurityEstimate: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        mortgage: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        mortgageValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        creditCardDebt: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        creditCardDebtValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        studentLoans: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        studentLoansValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        homeEquityLineOfCredit: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        homeEquityLineOfCreditValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bussinesLineOfCredit: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        bussinesLineOfCreditValue: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isHavingAccountant: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        happyWithAccountant: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        accountantName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contactInfoAccountant: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        havingestateAttorney: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        attorneyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        attorneyContactInfo: {
            type: DataTypes,
            allowNull: true,
        },
        isWorkinglifAgent: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        licAgentName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        licAgentContactInfo: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isHavingInvestmentAdviser: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        investmentAdviserName: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        investmentAdviserContactInfo: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        financialPlanInvolvment: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        involvmentNameAndContact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        faceMeeting: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ContactWay: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discuss: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    }, {
        tableName: 'user',
        paranoid: true,
        timestamps  : true,
        freezeTableName: true
    });



    return User;
};