import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://ml-imdb.vercel.app/")
time.sleep(2)

buttons = driver.find_elements(By.CLASS_NAME, "btn")
nextButton = buttons[1]

for i in range(100):
    # Forzar click
    driver.execute_script("arguments[0].click();", nextButton)

#Validaciones
    text_page = driver.find_element(By.XPATH, "//span").text
    
    if "Page 1 of 100" in text_page:
        print("Pagina 1 cargada correctamente")    
    elif "Page 50 of 100" in text_page:
        print("Pagina 50 cargada correctamente")    
    elif "Page 100 of 100" in text_page:
        print("Pagina 100 cargada correctamente")    
    else:
        pass

    current_page = int(text_page.split()[1])
    assert 0 < current_page < 101

print("\nTest ""Next Buttom"" Finalizado")


#---------------------------------
input("Enter para cerrar")
driver.quit()