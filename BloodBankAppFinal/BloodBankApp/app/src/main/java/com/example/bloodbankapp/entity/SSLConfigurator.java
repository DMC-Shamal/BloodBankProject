package com.example.bloodbankapp.entity;

import java.io.InputStream;
import java.security.KeyStore;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;

public class SSLConfigurator {

    public static SSLSocketFactory getSSLSocketFactory() throws Exception {
        TrustManager[] trustManagers = getTrustManagers();
        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, trustManagers, new SecureRandom());
        return sslContext.getSocketFactory();
    }

    private static TrustManager[] getTrustManagers() throws Exception {
        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(getKeyStore());
        return trustManagerFactory.getTrustManagers();
    }

    private static KeyStore getKeyStore() throws Exception {
        KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        trustStore.load(null); // Initialize an empty keystore
        // Load your trust store file
        InputStream trustStoreInputStream = null; // Load your trust store file
        char[] trustStorePassword = "yourTrustStorePassword".toCharArray();
        trustStore.load(trustStoreInputStream, trustStorePassword);
        return trustStore;
    }
}
